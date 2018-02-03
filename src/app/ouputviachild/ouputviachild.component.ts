import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ouputviachild',
  templateUrl: './ouputviachild.component.html',
  styleUrls: ['./ouputviachild.component.css']
})
export class OuputviachildComponent implements OnInit {

  message: string = "click from child"
  @Output() messageEvent = new EventEmitter<string>();  
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
