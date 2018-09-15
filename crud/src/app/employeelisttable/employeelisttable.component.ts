import { Component, OnInit, Output } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employeemodel";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-employeelisttable',
  templateUrl: './employeelisttable.component.html',
  styleUrls: ['./employeelisttable.component.css']
})
export class EmployeelisttableComponent implements OnInit {
  employees: Employee[];
  private subscription: Subscription;

  constructor(private employeeservice: EmployeeService) {


  }

  ngOnInit() {
    this.employees = this.employeeservice.getEmployee()
    this.subscription = this.employeeservice.employeeChanged.subscribe((
      employees: Employee[]) => {
      this.employees = employees;
    })



  }

  editEmployee(index:number) {
    this.employeeservice.startedEditing.next(index)
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }
}
