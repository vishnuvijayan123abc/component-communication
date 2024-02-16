import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()context:string=""
  @Output() emmiter=new EventEmitter()

  constructor(){
    
  }



  sendmessage(){
    let message="this is a message from child"
    this.emmiter.emit(message)
    
  }
  
 
  

}
