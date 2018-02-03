import { Component, Input, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  @Input()  
  name: string;
  user: [{
    'name':'shakthi',
    'age':'20',
    'branch':'dce'
  }]
  constructor() { }

  ngOnInit() {
    console.log("inside the oninit")
  }
  ngOnChanges(change: SimpleChange)
  {
    console.log("inside the onchanges=============", change)
    console.log("pervious value", change.previousValue)
    console.log("pervious value", change.currentValue)
  }
  ngDoCheck()
  {
    console.log("inside the docheck")
  }
  ngAfterContentInit()
  {
    console.log("inside the afterContentInit")
  }
  ngAfterContentChecked()
  {
    console.log("inside the AfterContentChecked")
  }
  ngAfterViewInit()
  {
    console.log("inside the AfterViewInit")
  }
  ngAfterViewChecked()
  {
    console.log("inside the AfterViewChecked")
  }
  ngOnDestroy()
  {
    console.log("inside the OnDestroy")
  }

}
