import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComplaintsService } from '../../services/complaints-id.service';
import { AuthService } from '../../services/auth.service'; // Importe o AuthService

@Component({
  selector: 'app-complaints-id',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './complaints-id.component.html',
  styleUrls: ['./complaints-id.component.scss']
})
export class ComplaintsIdComponent implements OnInit {
  complaints: any[] = [];

  constructor(private complaintsService: ComplaintsService, private authService: AuthService) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId !== null) {
      this.complaintsService.getComplaintsByUserId(userId).subscribe(data => {
        this.complaints = data.map(complaint => ({
          cep: complaint.cep,
          street: complaint.street,
          neighborhood: complaint.neighborhood,
          city: complaint.city,
          state: complaint.state,
          description: complaint.description,
          image: complaint.image,
          collapsed: true
        }));
      });
    } else {
      console.error('Erro: ID do usuário não está definido.');
    }
  }

  toggleDescription(complaint: any): void {
    complaint.collapsed = !complaint.collapsed;
  }
}
