import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = new Employee("", "", "", "", 0,new Date, "");
  employeeId:any = this.route.snapshot.paramMap.get("employeeId");
  // employee: Employee = new Employee();
  editMode: boolean = true;
  // @ViewChild('employeeForm') form: NgForm;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.employeeService.getEmployee(this.employeeId).subscribe((getData: any) => {
      console.log(getData);
      this.employee = getData.data;
    });
    
  }

getEmployee(){
  this.employeeService.getEmployee(this.employeeId).subscribe((getData: any) => {
    console.log(getData);
    this.employee = getData.data;
  });
}

  employeeAdd(){
    this.employeeService.addEmployee(this.employee).subscribe((data:any) => {
      this.router.navigate(["dashboard"])
    });
  }
  

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee,this.employeeId).subscribe((data:any)=>{
      this.employee = data.data;
      // this.editMode = false
      this.router.navigate(['dashboard'])
    })
    // this.router.navigate(['update?id'])
    // this.editMode = false;
    // this.employee = employee;
  }

}
