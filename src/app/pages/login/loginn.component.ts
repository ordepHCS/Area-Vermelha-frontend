import { Component } from '@angular/core';
import { LoginUserComponent } from '../../components/login-layout/login-layout.component';

@Component({
  selector: 'app-loginn',
  standalone: true,
  imports: [LoginUserComponent],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.scss'
})
export class LoginComponent {}
