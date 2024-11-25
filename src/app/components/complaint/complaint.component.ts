import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent {
  constructor(private router: Router) {}

  onBack() {
    this.router.navigate(['/choice']);
  }

  onSubmit() {
    this.router.navigate(['/choice']);
  }
}
