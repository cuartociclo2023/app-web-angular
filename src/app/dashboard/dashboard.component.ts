import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private route: ActivatedRoute, private router: Router){

  }

  onNavigateToHomePage(): void{
    this.router.navigate(['home'], {relativeTo: this.route})
  }

  onNavigateToPostPage(): void{
    this.router.navigate(['post'], {relativeTo: this.route})
  }

}
