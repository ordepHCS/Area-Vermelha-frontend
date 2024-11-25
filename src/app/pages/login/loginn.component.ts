import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';

@Component({
  selector: 'app-loginn',
  standalone: true,
  imports: [
    LoginLayoutComponent
  ],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.scss'
})
export class LoginComponent {}
