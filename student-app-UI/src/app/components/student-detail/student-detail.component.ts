import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student, StudentProgram, StudentViewModel } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  @ViewChild('studentForm') studentForm: any;
  student: Student = new Student();
  studentPrograms: StudentProgram[] = [];
  isErrorOnSubmit: boolean = false;
  studentId: number = 0;
  studentDetail:StudentViewModel = new StudentViewModel();
  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {
    this.studentId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getStudentDetail();
    this.getStudentPrograms();
  }

  getStudentDetail() {
    this.studentService.getStudentById(this.studentId).subscribe((response) => {
      this.studentDetail = response;
      this.student = this.studentDetail.student;
      if(this.studentDetail.studentMealPreference && this.studentDetail.studentMealPreference.meal){
        this.studentDetail.studentMealPreference.meal.foodItems = this.studentDetail.studentMealPreference.meal.foodItem.split(',');
        this.studentDetail.studentMealPreference.meal.foodTypes = this.studentDetail.studentMealPreference.meal.foodType.split(',');
      }
    });
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

  printPage() {
    window.print();
  }

  isInclude(value:string){
    return this.studentDetail.studentMealPreference.meal.foodType.includes(value); 
  }

}


