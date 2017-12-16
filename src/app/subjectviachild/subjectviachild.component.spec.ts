import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectviachildComponent } from './subjectviachild.component';

describe('SubjectviachildComponent', () => {
  let component: SubjectviachildComponent;
  let fixture: ComponentFixture<SubjectviachildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectviachildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectviachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
