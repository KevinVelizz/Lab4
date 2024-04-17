import { Component } from '@angular/core';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BienvenidoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}
