import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Meal, Student, StudentProgram } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-post-kitchen-item',
  templateUrl: './post-kitchen-item.component.html',
  styleUrls: ['./post-kitchen-item.component.css']
})
export class PostKitchenItemComponent implements OnInit {

  @ViewChild('kitchenForm') kitchenForm: any;
  meal: Meal = new Meal();
  isErrorOnSubmit: boolean = false;

  isInclude(value:string){
    return this.meal.foodType.includes(value); 
  }

  constructor(private studentService: StudentService,private router:Router,private toastrService: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmitForm() {
    if (this.kitchenForm.invalid) {
      this.isErrorOnSubmit = true;
      return;
    }

    this.studentService.postKitchenItem(this.meal).subscribe((response) => {
      this.showSuccess();
      this.router.navigate(['/kitchen-item-list']);
    });
  }

  public showSuccess(): void {
    this.toastrService.success('Record posted successfully!', 'Success!');
  }

}
