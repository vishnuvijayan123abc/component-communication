import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message:string="this is a message from parent"

  recivemessage(data:any){
    console.log(data);
    

  }

}
