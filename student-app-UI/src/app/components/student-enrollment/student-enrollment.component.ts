import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student, StudentProgram } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.css'],
})
export class StudentEnrollmentComponent implements OnInit {
  @ViewChild('studentForm') studentForm: any;
  student: Student = new Student();
  studentPrograms: StudentProgram[] = [];
  isErrorOnSubmit: boolean = false;

  constructor(private studentService: StudentService,private router:Router,private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.getStudentPrograms();
  }

  getStudentPrograms() {
    this.studentService.getAllPrograms().subscribe((response) => {
      this.studentPrograms = response;
    });
  }

  onSubmitForm() {
    if (this.studentForm.invalid) {
      this.isErrorOnSubmit = true;
      return;
    }

    let selectedProgram = this.studentPrograms.find(program => program.id.toString() === this.student.programId);
    if(selectedProgram)
      this.student.program = selectedProgram;
    this.studentService.createStudentEnrollment(this.student).subscribe((response) => {
      this.showSuccess();
      this.router.navigate(['/list']);
    });
  }

  public showSuccess(): void {
    this.toastrService.success('Student enrolled successfully!', 'Success!');
  }

  public showWarning(): void {
    this.toastrService.warning('Student enrolled successfully!', 'Title Success!');
  }
}
