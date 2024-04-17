import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, LoginComponent, BienvenidoComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  edadUno = 0;
  edadDos = 0;
  promedio = 0;
  suma = 0;
  
  protected btnCalcular()
  {
    this.suma = this.edadUno + this.edadDos;
    if(this.suma !=0)
    {
      this.promedio = this.suma / 2;
    }
  }

  consola()
  {
    console.log("desde la consola");
  }

  btnLimpiar()
  {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}

