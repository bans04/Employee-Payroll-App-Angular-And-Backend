import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private route: Router) { }
  public employeeDetails: any = [];
 
  // @ViewChild('employeeForm')form:NgForm ;
  // @ViewChild("EmployeeFormComponent")
  // employeeFormComponent!: EmployeeFormComponent;


  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe((data:any)=>{
      console.log(data.data);
      this.employeeDetails = data.data;
    })
  }


  removeEmployee(employeeId: number){
    this.employeeService.removeEmployee(employeeId).subscribe((data:any)=>{
      console.log(data.deta);
      this.ngOnInit;
      this.route.navigate(['dashboard'])
    })
  }

updateEmployee(employeeId: number){
  this.route.navigate(['update', employeeId])

  // let existingEmployee = this.employeeDetails.find((employee:any)=> {return employee.employeeId == employeeId})
  // console.log(existingEmployee)
  // // this.router.navigate(['update?id'])
  // this.employeeFormComponent.updateEmployee(existingEmployee);
  // // this.updateForm.updateEmployee(existingEmployee.data)
  // // this.router.navigate(['update?id'])
  // // this.updateForm.updateEmployee(existingEmployee)


  
  // this.employeeService.updateEmployee(employee.employeeId, ).subscribe((data:any)=>{
  //   console.log(data);
  //   this.ngOnInit;
  // })
}


}
