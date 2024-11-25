import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterModule } from '@angular/router'; 
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model'; 

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss']
})
export class RegisterUserComponent {
  user: User = { cpf: '', name: '', birthDate: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  register(event: Event): void {
    event.preventDefault();
    console.log('Tentando registrar com CPF:', this.user.cpf);
    this.userService.registerUser(this.user).subscribe(response => {
      console.log('Usuário registrado com sucesso:', response);
      this.router.navigate(['/login']);
    }, error => {
      console.error('Erro ao registrar usuário:', error);
    });
  }
}
