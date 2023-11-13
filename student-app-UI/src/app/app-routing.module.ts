import { KitchenItemListComponent } from './components/kitchen-item-list/kitchen-item-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEnrollmentComponent } from './components/student-enrollment/student-enrollment.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { PostKitchenItemComponent } from './components/post-kitchen-item/post-kitchen-item.component';
import { HomeComponent } from './components/home/home.component';
import { StudentMealComponent } from './components/student-meal/student-meal.component';
import { StudentPreferenceListComponent } from './components/student-preference-list/student-preference-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: StudentEnrollmentComponent },
  { path: 'list', component: StudentListComponent }, 
  { path: 'post-kitchen-items', component: PostKitchenItemComponent },
  { path: 'kitchen-item-list', component: KitchenItemListComponent },
  { path: 'post-student-preferences', component: StudentMealComponent },
  { path: 'student-preference-list', component: StudentPreferenceListComponent },
  { path: 'student-detail/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
