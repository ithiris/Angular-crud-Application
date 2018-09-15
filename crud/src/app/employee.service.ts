import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {EventEmitter} from '@angular/core';
import {Employee} from "./employeemodel";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  startedEditing = new Subject<number>();
employeeChanged =new EventEmitter<Employee[]>();
  private employees:Employee[]=[
    new Employee('abdul' ,'programmer'),
    new Employee('umar' ,'java'),
  ]
  Employee=JSON.parse(localStorage.getItem("employees"));


  constructor() {
  }
  getEmployee(){
    return this.employees.slice();
  }

  getEmployeeData(index:number){
    return this.employees[index]
  }

  // getIngredient(index:number){
  //   return this.ingredients[index];
  //
  // }

  addEmployee(employee:Employee){
    this.employees.push(employee)
    this.employeeChanged.emit(this.employees.slice());

    let newNote = JSON.stringify(this.employees);
    localStorage.setItem("employees", newNote);
  }

  updateEmployee(index:number,newEmployee:Employee){
    this.employees[index]=newEmployee;
    this.employeeChanged.next(this.employees.slice())
  }

  deleteEmployee(index:number){
    this.employees.splice(index,1);
    this.employeeChanged.next(this.employees.slice())

  }

}
