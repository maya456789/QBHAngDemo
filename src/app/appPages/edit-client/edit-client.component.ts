import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  public isSubmitted=false;
  public client:any='';

  updateClient=this.fbuild.group({
    name:['',Validators.required],
    email:['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
  ])],
    phone:['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]+$")])],

  });

  constructor(private aroute: ActivatedRoute,private fbuild:FormBuilder,private clientServic:ClientService,private rout:Router){


  }

  ngOnInit(): void {
    const id = this.aroute.snapshot.paramMap.get('id');
   // alert('id is'+id);

   this.clientServic.getSingleClient(id).subscribe(
    res=>{
      this.client=res;
      console.log("Client is:",this.client.name);
      this.updateClient.setValue({
        name:`${this.client.name}`,
        email:`${this.client.email}`,
        phone:`${this.client.phone}`,
       })
    }
   )


  }

  onSubmit(updateClient:any){

    this.isSubmitted=true;


    if(updateClient.valid){
    // this.clientServic.addClientInfo(updateClient.value).subscribe(
    //   res=>{
    //     console.log("Created Client Information is :",res);
    //    // this.result=res;
    //    alert("Client is created! go to download pdf.")
    //    this.rout.navigate(["homepage/create-project"]);
    //   }
    // )
    updateClient.value.id=this.client.id;
    console.log("Updated value:",updateClient);
     this.clientServic.updateClient(updateClient.value).subscribe(
      res=>{
        console.log("Response From Server:",res);
        if(res[0]){
          alert("Client Updated successfully");
          this.rout.navigate(['/homepage/create-project'])
        }else{
          alert("Error occur, not updated ");
        }
      }
     )

  }
  }

}
