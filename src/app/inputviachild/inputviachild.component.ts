import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputviachild',
  templateUrl: './inputviachild.component.html',
  styleUrls: ['./inputviachild.component.css']
})
export class InputviachildComponent implements OnInit {
  @Input() childMessage: string;
  constructor() { }

  ngOnInit() {
    console.log("-----------", this.childMessage)
  }

}
