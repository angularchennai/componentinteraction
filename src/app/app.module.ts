import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputviaparentComponent } from './inputviaparent/inputviaparent.component';
import { InputviachildComponent } from './inputviachild/inputviachild.component';
import { ViewchildparentComponent } from './viewchildparent/viewchildparent.component';
import { ViewchildchildComponent } from './viewchildchild/viewchildchild.component';
import { OuputviaparentComponent } from './ouputviaparent/ouputviaparent.component';
import { OuputviachildComponent } from './ouputviachild/ouputviachild.component';
import { SubjectviachildComponent } from './subjectviachild/subjectviachild.component';
import { SubjectviaparentComponent } from './subjectviaparent/subjectviaparent.component';



import {DataService} from './data.service';
import { SubjectviasiblingComponent } from './subjectviasibling/subjectviasibling.component'


@NgModule({
  declarations: [
    AppComponent,
    InputviaparentComponent,
    InputviachildComponent,
    ViewchildparentComponent,
    ViewchildchildComponent,
    OuputviaparentComponent,
    OuputviachildComponent,
    SubjectviachildComponent,
    SubjectviaparentComponent,
    SubjectviasiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
