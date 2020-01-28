import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { EmpModel } from '../../Model/emp-model';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  constructor( private manager : FirebaseService,private redirect:Router) { }

  ngOnInit() {
  }
  insertEmployee(empData){
    let emp : EmpModel =
    {
      empCode : empData.value.empcode,
      empName : empData.value.empname,
      empEmail : empData.value.empemail,
      empMobile : empData.value.empmobile,
      empDes : empData.value.empdes,
      empStatus : empData.value.empstatus,
      empSalary : empData.value.empsalary
    }
    //console.log(emp);
    this.manager.createEmp(emp);
    this.redirect.navigate(['/list']);
  }

}
