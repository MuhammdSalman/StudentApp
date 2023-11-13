import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateStudentMealPreference, Meal, Student, StudentMealPreference } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-student-meal',
  templateUrl: './student-meal.component.html',
  styleUrls: ['./student-meal.component.css']
})
export class StudentMealComponent implements OnInit {
  @ViewChild('studentMealForm') studentMealForm: any;
  studentMeal: CreateStudentMealPreference = new CreateStudentMealPreference();
  students: Student[]=[];
  meals: Meal[] = [];
  isErrorOnSubmit: boolean = false;

  constructor(private studentService: StudentService,private router:Router,private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((response) => {
      this.students = response;
    });

    this.studentService.getAllKitchenStuff().subscribe((response) => {
      this.meals = response;
    });
  }

  onSubmitForm() {
    if (this.studentMealForm.invalid) {
      this.isErrorOnSubmit = true;
      return;
    }
    this.studentService.postStudentPreference(this.studentMeal).subscribe((response) => {
      this.showSuccess();
      this.router.navigate(['/student-preference-list']);
    });
  }

  public showSuccess(): void {
    this.toastrService.success('Record posted successfully!', 'Success!');
  }

}

