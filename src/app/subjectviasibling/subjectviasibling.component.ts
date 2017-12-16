import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-subjectviasibling',
  templateUrl: './subjectviasibling.component.html',
  styleUrls: ['./subjectviasibling.component.css']
})
export class SubjectviasiblingComponent implements OnInit {

  message:string;  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}
