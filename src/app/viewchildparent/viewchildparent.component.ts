import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewchildchildComponent} from '../viewchildchild/viewchildchild.component'

@Component({
  selector: 'app-viewchildparent',
  templateUrl: './viewchildparent.component.html',
  styleUrls: ['./viewchildparent.component.css']
})
export class ViewchildparentComponent implements OnInit {

  @ViewChild(ViewchildchildComponent) child;

  constructor() { }

  message:string;
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.message = this.child.message;
    this.child.message = 'sdfsdss';
  }

}
