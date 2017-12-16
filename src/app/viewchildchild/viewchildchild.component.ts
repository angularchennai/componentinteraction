import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchildchild',
  templateUrl: './viewchildchild.component.html',
  styleUrls: ['./viewchildchild.component.css']
})
export class ViewchildchildComponent implements OnInit {

  message: string = "Hola Mundo!";
  constructor() { }

  ngOnInit() {
  }

}
