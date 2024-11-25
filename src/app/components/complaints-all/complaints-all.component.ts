import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComplaintsService } from '../../services/complaints-all.service';

@Component({
  selector: 'app-all-complaints',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './complaints-all.component.html',
  styleUrls: ['./complaints-all.component.scss']
})
export class AllComplaintsComponent implements OnInit {
  complaints: any[] = [];

  constructor(private complaintsService: ComplaintsService) {}

  ngOnInit(): void {
    this.complaintsService.getComplaints().subscribe(data => {
      this.complaints = data;
    });
  }
}
