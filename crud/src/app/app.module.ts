import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelisttableComponent } from './employeelisttable/employeelisttable.component'
import {EmployeeService} from "./employee.service";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeformComponent,
    EmployeelisttableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
