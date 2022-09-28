import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://localhost:8080/employeepayrollapp/";

  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post( this.baseUrl + "add" , employee );
    // <Employee>('${this.baseUrl}', employee);
  }

  getEmployees(){
    return this.httpClient.get(this.baseUrl + "employees");
  }

  getEmployee(employeeId: number){
    return this.httpClient.get(this.baseUrl + "employee?employeeId=" + employeeId );
    // localhost:8080/employeepayrollapp/employee?employeeId=2
  }


  removeEmployee(employeeId: number):Observable<Employee>{
    return this.httpClient.delete(this.baseUrl + "delete?employeeId=" + employeeId);
  }

  // removeEmployee(employeeId: number): Observable<any> {
  //   console.log(employeeId);
  //   return this.httpClient.delete(this.baseUrl + "delete",{
  //     headers: new HttpHeaders(),
  //     params: new HttpParams().append('employeeId', employeeId),
  //   });
  // }

  updateEmployee(employee: any, Id: number){
    return this.httpClient.put(this.baseUrl + "update?employeeId=" + Id,employee);
    // localhost:8080/employeepayrollapp/update?employeeId=3
  }


}