import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectviasiblingComponent } from './subjectviasibling.component';

describe('SubjectviasiblingComponent', () => {
  let component: SubjectviasiblingComponent;
  let fixture: ComponentFixture<SubjectviasiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectviasiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectviasiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
