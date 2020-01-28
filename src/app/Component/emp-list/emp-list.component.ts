import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empList :any[]=[];
  isLoaded = false;
  
  constructor( private manager : FirebaseService,private route :  Router) { }

  ngOnInit() {
    this.isLoaded = true;
    this.manager.getAllEmp().subscribe(
      data => {
        this.empList = data;
       // console.log(this.empList[0].payload.doc.data());
      }
    )
  }
  deleteEmp(id){
   // console.log(id);
    this.manager.delete(id);
  }
  edit(id){
    this.route.navigate(['/add',id]);
    //console.log(id);
  }
}
