import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from './usuario';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.email === 'admin@mmi.com.br' && usuario.senha === 'admin'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
    }
  }

  estaAutenticado() {
    return this.usuarioAutenticado;
  }

  fazerLogout() {
    this.mostrarMenuEmitter.emit(false);
    this.usuarioAutenticado = false;
    this.router.navigate(['/login']);
  }
}
