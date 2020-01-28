import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { EmpModel } from '../Model/emp-model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private db : AngularFirestore) { }

  createEmp(emp:EmpModel)
  {
    this.db.collection('employee').add(emp);
    console.log("User "+ emp.empName +" added successfully...");
  }

  getAllEmp(){
    return this.db.collection('employee').snapshotChanges();
  }

  delete(id){
    this.db.collection("employee").doc(id).delete();
    console.log("User "+ id +" deleted successfully...");
  }

  getempById(id){
    return this.db.collection('employee').doc(id).snapshotChanges();
  }
  update(id,data){
    this.db.collection('employee').doc(id).set(data);
  }
}
