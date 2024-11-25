import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComplaintService } from '../../services/complaint.service';
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
    this.complaintsService.getAllComplaints().subscribe(data => {
      this.complaints = data.map(complaint => ({
        cep: complaint.cep,
        street: complaint.street,
        neighborhood: complaint.neighborhood,
        city: complaint.city,
        state: complaint.state,
        description: complaint.description,
        image: complaint.image
      }));
    });
  }
}
