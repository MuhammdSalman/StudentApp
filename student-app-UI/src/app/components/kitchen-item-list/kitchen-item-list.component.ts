import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, Student } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-kitchen-item-list',
  templateUrl: './kitchen-item-list.component.html',
  styleUrls: ['./kitchen-item-list.component.css']
})
export class KitchenItemListComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private studentService:StudentService,private router:Router) {}

  ngOnInit() {
    this.getAllKitchenStuff();
  }

  async getAllKitchenStuff() {
     this.studentService.getAllKitchenStuff().subscribe(response => {
      this.meals = response;
     });
  }

  newPost(){
    this.router.navigate(['/post-kitchen-items']);
  }
}
