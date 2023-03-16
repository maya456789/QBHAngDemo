import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  public isSubmitted=false;

  createClient=this.fbuild.group({
    name:['',Validators.required],
    email:['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
  ])],
    phone:['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]+$")])],

  });

  constructor(private fbuild:FormBuilder,private clientServic:ClientService,private rout:Router){


  }


  onSubmit(createclient:any){

    this.isSubmitted=true;
    console.log(createclient);

    if(createclient.valid){
    this.clientServic.addClientInfo(createclient.value).subscribe(
      res=>{
        console.log("Created Client Information is :",res);
       // this.result=res;
       alert("Client is created! go to download pdf.")
       this.rout.navigate(["homepage/create-project"]);
      }
    )

  }
  }
}
