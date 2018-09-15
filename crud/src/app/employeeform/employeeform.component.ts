import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators}from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Employee} from "../employeemodel";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Employee;
  employeeForm: FormGroup;


  constructor(private employeeservice: EmployeeService, private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.subscription = this.employeeservice.startedEditing.subscribe((index:number)=>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editedItem = this.employeeservice.getEmployeeData(index);
    this.employeeForm.setValue({
      employeeName: this.editedItem.employeeName,
      employeeJob: this.editedItem.employeeJob
    })


  }

    )
    this.onEmployeeObjData()
}


  onEmployeeObjData(){

    this.employeeForm=this.formbuilder.group({

      employeeName:[null,Validators.required],
      employeeJob:[null,Validators.required]

    })

  }
  onSubmit(){

  const saveForm = this.employeeForm.value;
  const newEmployee = new Employee(saveForm.employeeName, saveForm.employeeJob);
  if (this.editMode) {
    this.employeeservice.updateEmployee(this.editedItemIndex, newEmployee);
  }else {
    this.employeeservice.addEmployee(newEmployee)

  }
  this.editMode=false;
  this.employeeForm.reset()

}

onClear(){
    this.employeeForm.reset()
  this.editMode=false;
}
onDelete(){
    this.onClear()
  this.employeeservice.deleteEmployee(this.editedItemIndex)
}

}
