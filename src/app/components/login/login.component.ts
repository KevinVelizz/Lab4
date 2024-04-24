import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../class/usuario';
import { Router } from '@angular/router';
import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc } from
'@angular/fire/firestore';
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  
  correo:string = "";
  clave:string = "";
  router2 = inject(Router);
  private firestore!: Firestore;
  validarUser:string = "";
  // notificationService: NotificationServiceService;
  guardar()
  {
    const col = collection(this.firestore, 'usuarios');
    addDoc(col, {correo: 'Kevin@kevin.com', clave:'123456'});
  }

  traer()
  {
    const col = collection(this.firestore, 'usuarios');
    const observable = collectionData(col);

    observable.subscribe((respuesta)=>{
      console.log(respuesta);
    })
  }

  login() {
    let usuarios: any = localStorage.getItem('usuarios');  
  
    if (usuarios) {
      usuarios = JSON.parse(usuarios);
    } else {
      usuarios = [];
    }
  
    console.log('Correo:', this.correo);
    console.log('Clave:', this.clave);
    let usuario = new Usuario(this.correo, this.clave);
    let usuarioExistente = usuarios.find((u: Usuario) => u.correo === usuario.correo && u.clave === usuario.clave);
  
    console.log('Usuario encontrado:', usuarioExistente);
  
    if (usuarioExistente) {
      this.router2.navigateByUrl('bienvenida');
    } else {
      this.validarUser = "Verifique las credenciales";
      console.log("Error de identificación: usuario no encontrado");
    }
  }
}
