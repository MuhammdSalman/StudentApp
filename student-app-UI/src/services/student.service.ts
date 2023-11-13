import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateStudentMealPreference, Meal, Student, StudentMealPreference, StudentProgram, StudentViewModel } from 'src/models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public api_Url:string='https://localhost:7273/api/';
  constructor(private httpClient: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.api_Url+'Students');
  }

  getStudentById(id:number): Observable<StudentViewModel> {
    return this.httpClient.get<StudentViewModel>(this.api_Url+'Students/'+id);
  }

  createStudentEnrollment(body: Student): Observable<Student[]> {
    return this.httpClient.post<Student[]>(this.api_Url+'Students', body);
  }

  getAllPrograms(): Observable<StudentProgram[]> {
    return this.httpClient.get<StudentProgram[]>(this.api_Url+'StudentPrograms');
  }

  postKitchenItem(body: Meal): Observable<Meal[]> {
    return this.httpClient.post<Meal[]>(this.api_Url+'Meals', body);
  }

  postStudentPreference(body: CreateStudentMealPreference): Observable<StudentMealPreference[]> {
    return this.httpClient.post<StudentMealPreference[]>(this.api_Url+'StudentMealPreferences', body);
  }

  getAlStudentMealPreferences(): Observable<StudentMealPreference[]> {
    return this.httpClient.get<StudentMealPreference[]>(this.api_Url+'StudentMealPreferences');
  }

  getAllKitchenStuff(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(this.api_Url+'Meals');
  }
}
