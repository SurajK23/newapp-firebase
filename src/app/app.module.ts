import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './Component/emp-add/emp-add.component';
import { EmpListComponent } from './Component/emp-list/emp-list.component';
import { EmpdetailsComponent } from './Component/empdetails/empdetails.component';
import { EditComponent } from './Component/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpAddComponent,
    EmpListComponent,
    EmpdetailsComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
