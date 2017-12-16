import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputviachildComponent } from './inputviachild.component';

describe('InputviachildComponent', () => {
  let component: InputviachildComponent;
  let fixture: ComponentFixture<InputviachildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputviachildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputviachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
