import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { EmpModel } from 'src/app/Model/emp-model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  code : any;
  name : any;
  email : any;
  mobile : any;
  salary : any;
  status : any;
  designation : any;
  id :number
  empdetails : any;

  constructor(private active : ActivatedRoute, private manager : FirebaseService) { }

  ngOnInit() {
    this.code = this.active.snapshot.paramMap.get("id");
    // console.log(this.code);
    this.manager.getempById(this.code).subscribe(
      data =>{
        this.empdetails = data.payload.data();
        this.id = parseInt(data.payload.id);
        this.code = this.empdetails.empCode;
        this.name = this.empdetails.empName;
        this.email = this.empdetails.empEmail;
        this. mobile = this.empdetails.empMobile;
        this.salary = this.empdetails.empSalary;
        this.status = this.empdetails.empStatus;
        this. designation = this.empdetails.empDes;
        //console.log(data.payload.id);
      }
    )
  }

  update(updatedata){
    
    console.log(updatedata);
    // {
    //   empCode : updatedata.value.empcode,
    //   empName : updatedata.value.empname,
    //   empEmail : updatedata.value.empemail,
    //   empMobile : updatedata.value.empmobile,
    //   empDes : updatedata.value.empdes,
    //   empStatus : updatedata.value.empstatus,
    //   empSalary : updatedata.value.empsalary
    // }
  
  }
}
