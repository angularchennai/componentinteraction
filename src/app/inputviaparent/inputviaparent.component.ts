import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputviaparent',
  templateUrl: './inputviaparent.component.html',
  styleUrls: ['./inputviaparent.component.css']
})
export class InputviaparentComponent implements OnInit {
  parentMessage = "message from parent"
  constructor() { }

  ngOnInit() {
  }

}
