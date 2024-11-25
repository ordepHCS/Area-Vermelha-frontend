import { Component } from '@angular/core';
import { RegisterUserComponent } from '../../components/register-layout/register-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RegisterUserComponent  
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class RegisterComponent {}