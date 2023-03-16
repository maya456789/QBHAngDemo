import { Component,ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { PupComponent } from './viewChildDecorator/pup.component';
import { SharkDirective } from './viewChildDecorator/shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontAng15App';

  // @ViewChild(SharkDirective)
  // set appShark(directive:SharkDirective){
  //    this.title=directive.creature;
  // }

  // @ViewChild('someInput') someInput!: ElementRef;

  // @ViewChild(PupComponent) pup!:PupComponent;


  // ngAfterViewInit(): void {
  //    console.log(this.title);
  //    this.someInput.nativeElement.value = 'Whale!';
  //    console.log(this.pup.whoAmI(),this.pup.pupVariable);

  // }

 /* users:any[] = [
    {
    name: "ajay",
    age: 20,
    isMarried: false,
    sport:'football'
    },
    {
    name: "anil",
    age: 22,
    isMarried: false,
    sport:'cricket'
    },
    {
    name: "paresh",
    age: 27,
    isMarried: true,
    sport:'cricket'
    },
    {
    name: "snehil",
    age: 29,
    isMarried: true,
    sport:'cricket'
    }
    ]



   marriedName:any[]=this.users.filter(function(user){
        return (user.sport === 'football')
    }).map(function(user){
        return user.name
    });*/

   // console.log('Name of married user is :');


}
