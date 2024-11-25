import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginRequest } from '../../models/login-request.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginUserComponent {
  loginRequest: LoginRequest = { cpf: '', password: '' };

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {}

  onLogin(event: Event): void {
    event.preventDefault();
    console.log('Tentando logar com CPF:', this.loginRequest.cpf);
    this.userService.loginUser(this.loginRequest).subscribe(response => {
      console.log('Login bem-sucedido:', response);
      const userId = (response as any).userId;
      this.authService.setUserId(userId);
      this.router.navigate(['/choice']);
    }, error => {
      console.error('Erro ao fazer login:', error);
      console.error('Erro detalhes:', error.message, error.error);
    });
  }
}
