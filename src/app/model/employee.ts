export class Employee {
    // empId : any;
    name?: string;
    profilePic?: string;
    empGender?: string;
    department?: string;
    empSalary?: number;
    startDate?: Date;
    note?: string;

    // constructor (){

    // }
    constructor(name: string, profilePic: string, empGender: string, department: string, empSalary: number, startDate: Date, note: string){
        this.name = name;
        this.profilePic = profilePic;
        this.empGender = empGender;
        this.department = department;
        this.empSalary = empSalary;
        this.startDate = startDate;
        this.note = note;
    }
}
