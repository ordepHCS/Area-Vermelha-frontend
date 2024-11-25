import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-complaint',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-complaint.component.html',
  styleUrl: './view-complaint.component.scss'
})
export class ViewComplaintComponent {

}
