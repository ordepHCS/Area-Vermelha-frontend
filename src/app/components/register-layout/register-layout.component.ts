import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss']
})
export class RegisterLayoutComponent {
  constructor(private router: Router) {}

  onRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['/choice']);
  }
}
