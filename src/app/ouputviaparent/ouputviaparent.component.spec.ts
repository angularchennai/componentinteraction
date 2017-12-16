import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputviaparentComponent } from './ouputviaparent.component';

describe('OuputviaparentComponent', () => {
  let component: OuputviaparentComponent;
  let fixture: ComponentFixture<OuputviaparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuputviaparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuputviaparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
