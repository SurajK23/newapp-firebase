import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../Services/firebase.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  empList :any[]=[];
  empdetails : any;
  code : any;
  name : any;
  email : any;
  mobile : number;
  salary : any;
  status : any;
  designation : any;
  constructor(private manager : FirebaseService) { }

  ngOnInit() {
    this.getempId();
  }

  getempId(){
    this.manager.getAllEmp().subscribe(
      data => {
        this.empList = data;
       // console.log(this.empList[0].payload.doc.data());
      }
    )
  }

  getempByID(id){
    this.manager.getempById(id).subscribe(
      data => {
        this.empdetails = data.payload.data();
        this.code = this.empdetails.empCode;
        this.name = this.empdetails.empName;
        this.email = this.empdetails.empEmail;
        this. mobile = this.empdetails.empMobile;
        this.salary = this.empdetails.empSalary;
        this.status = this.empdetails.empStatus;
        this. designation = this.empdetails.empDes;
        //console.log(this.empdetails);
      }
    )
  }
}
