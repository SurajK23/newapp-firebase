import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './Component/emp-list/emp-list.component';
import { EmpAddComponent } from './Component/emp-add/emp-add.component';
import { EmpdetailsComponent } from './Component/empdetails/empdetails.component';
import { EditComponent } from './Component/edit/edit.component';



const routes: Routes = [
  {
    path:'list',
    component:EmpListComponent
  },
  {
    path:'add',
    component:EmpAddComponent
  },
  {
    path:'',
    component:EmpdetailsComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
