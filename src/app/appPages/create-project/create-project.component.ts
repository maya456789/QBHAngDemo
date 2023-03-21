import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import {MatPaginator} from '@angular/material/paginator';
import {jsPDF} from 'jspdf';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  email:string;
  phone: number;

}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  @ViewChild('content',{static:false}) el!:ElementRef;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['id','name','email', 'phone','action'];
  dataSource!: MatTableDataSource<Product>;
  result:any;


  constructor(private fbuild:FormBuilder,private clientServic:ClientService,private route:Router){


  }

  ngOnInit(){
    this.onSubmit(123);
  }

  public removeClient(rclient:any){
   // alert("Id is"+rclient);
    this.clientServic.deleteClientInfo(rclient).subscribe(
      res=>{
        console.log("Delete record :",res);
        alert("Record deleted successfully");
      }
    )
  }

  onSubmit(createPrj:any){

    console.log(createPrj);

    this.clientServic.getClientInfo().subscribe(
      res=>{
        console.log("Client Information is :",res);
        this.result=res;
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
      }
    )

  }

 public editClient(clientId:any){

  this.route.navigate([`homepage/edit-client/${clientId}`]);

 }

  public makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf");
      }
    });

  }

}
