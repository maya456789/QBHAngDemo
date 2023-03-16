import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  @ViewChild('content',{static:false}) el!:ElementRef;
  result:any;


  constructor(private fbuild:FormBuilder,private clientServic:ClientService){


  }

  ngOnInit(){
    this.onSubmit(123);
  }

  onSubmit(createPrj:any){

    console.log(createPrj);

    this.clientServic.getClientInfo().subscribe(
      res=>{
        console.log("Client Information is :",res);
        this.result=res;
      }
    )

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
