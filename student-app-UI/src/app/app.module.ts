import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEnrollmentComponent } from './components/student-enrollment/student-enrollment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PostKitchenItemComponent } from './components/post-kitchen-item/post-kitchen-item.component';
import { HomeComponent } from './components/home/home.component';
import { StudentMealComponent } from './components/student-meal/student-meal.component';
import { KitchenItemListComponent } from './components/kitchen-item-list/kitchen-item-list.component';
import { StudentPreferenceListComponent } from './components/student-preference-list/student-preference-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEnrollmentComponent,
    StudentListComponent,
    HeaderComponent,
    PostKitchenItemComponent,
    HomeComponent,
    StudentMealComponent,
    KitchenItemListComponent,
    StudentPreferenceListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    BrowserAnimationsModule 
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
