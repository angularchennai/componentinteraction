import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputviaparentComponent } from './inputviaparent.component';

describe('InputviaparentComponent', () => {
  let component: InputviaparentComponent;
  let fixture: ComponentFixture<InputviaparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputviaparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputviaparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
