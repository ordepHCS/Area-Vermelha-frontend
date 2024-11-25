import { Component } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../models/complaint.model';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class CreateComplaintComponent {
  complaint: Complaint = {
    cep: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    description: '',
    image: ''
  };

  selectedFile: File | null = null;

  constructor(
    private complaintService: ComplaintService,
    private authService: AuthService,
    private router: Router
  ) {}

  createComplaint(): void {
    const userId = this.authService.getUserId(); 
    if (userId !== null) { 
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.complaint.image = e.target.result;
          this.saveComplaint(userId);
        };
        reader.readAsDataURL(this.selectedFile);
      } else {
        this.saveComplaint(userId);
      }
    } else {
      console.error('Erro: ID do usuário não está definido.');
    }
  }

  saveComplaint(userId: number): void {
    this.complaintService.createComplaint(userId, this.complaint).subscribe(response => {
      console.log('Reclamação criada com sucesso:', response);
      this.router.navigate(['/choice']);
    }, error => {
      console.error('Erro ao criar reclamação:', error);
    });
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addImage(): void {
    document.getElementById('image')?.click();
  }
}
