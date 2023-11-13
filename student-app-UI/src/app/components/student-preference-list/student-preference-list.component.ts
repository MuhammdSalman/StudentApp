import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student, StudentMealPreference } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-student-preference-list',
  templateUrl: './student-preference-list.component.html',
  styleUrls: ['./student-preference-list.component.css']
})
export class StudentPreferenceListComponent implements OnInit {
  studentPreferences: StudentMealPreference[] = [];

  constructor(private studentService:StudentService,private router:Router) {}

  ngOnInit() {
    this.getStudents();
  }

  async getStudents() {
     this.studentService.getAlStudentMealPreferences().subscribe(response => {
      this.studentPreferences = response;
     });
  }

  newPost(){
    this.router.navigate(['/post-student-preferences']);
  }
}
