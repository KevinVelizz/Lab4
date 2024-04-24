import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  edadUno = 0;
  edadDos = 0;
  promedio = 0;
  suma = 0;
  
  constructor() {
    
  }
  
  

  protected btnCalcular()
  {
    this.suma = this.edadUno + this.edadDos;
    if(this.suma !=0)
    {
      this.promedio = this.suma / 2;
    }
  }


  btnLimpiar()
  {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}

