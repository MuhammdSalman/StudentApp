import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home']);
  }

  StudentEnrollment(){
    this.router.navigate(['/list']);
  }

  KitchenStuff(){
    this.router.navigate(['/kitchen-item-list']);
  }

  StudentMealPreference(){
    this.router.navigate(['/student-preference-list']);
  }
}
