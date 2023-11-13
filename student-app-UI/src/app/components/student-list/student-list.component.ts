import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService:StudentService,private router:Router) {}

  ngOnInit() {
    this.getStudents();
  }

  async getStudents() {
     this.studentService.getAllStudents().subscribe(response => {
      this.students = response;
     });
  }

  newEnrollment(){
    this.router.navigate(['/create']);
  }

  openDetail(id:number){
    this.router.navigate(['/student-detail',id]);
  }
}
