import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-subjectviaparent',
  templateUrl: './subjectviaparent.component.html',
  styleUrls: ['./subjectviaparent.component.css']
})
export class SubjectviaparentComponent implements OnInit {

  message:string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
