import { Component } from '@angular/core';
import { RegisterLayoutComponent } from '../../components/register-layout/register-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RegisterLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class RegisterComponent {}