import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelisttableComponent } from './employeelisttable.component';

describe('EmployeelisttableComponent', () => {
  let component: EmployeelisttableComponent;
  let fixture: ComponentFixture<EmployeelisttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelisttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelisttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
