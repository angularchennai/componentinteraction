import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputviachildComponent } from './ouputviachild.component';

describe('OuputviachildComponent', () => {
  let component: OuputviachildComponent;
  let fixture: ComponentFixture<OuputviachildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuputviachildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuputviachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
