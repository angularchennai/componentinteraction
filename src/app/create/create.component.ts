import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  passname = "shakthi"
  constructor() { }

  ngOnInit() {
  }

  add()
  {
    this.passname = 'prakash';
  }

}
