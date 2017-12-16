import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectviaparentComponent } from './subjectviaparent.component';

describe('SubjectviaparentComponent', () => {
  let component: SubjectviaparentComponent;
  let fixture: ComponentFixture<SubjectviaparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectviaparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectviaparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
