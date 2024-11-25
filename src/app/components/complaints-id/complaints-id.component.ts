import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComplaintsService } from '../../services/complaints-id.service';

@Component({
  selector: 'app-complaints-id',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './complaints-id.component.html',
  styleUrls: ['./complaints-id.component.scss']
})
export class ComplaintsIdComponent implements OnInit {
  complaints: any[] = [];

  constructor(private complaintsService: ComplaintsService) {}

  ngOnInit(): void {
    this.complaintsService.getComplaints().subscribe(data => {
      this.complaints = data;
    });
  }
}
