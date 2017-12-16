import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ouputviaparent',
  templateUrl: './ouputviaparent.component.html',
  styleUrls: ['./ouputviaparent.component.css']
})
export class OuputviaparentComponent implements OnInit {

  message:string;
  
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event
  }

}
