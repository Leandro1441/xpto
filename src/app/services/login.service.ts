import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private estaLogado = false

  constructor() { }

  setLogin(login = false) {
    this.estaLogado = login

    return this.estaLogado
  }

  validarLogin(cpf: string, senha: string) {
      return this.setLogin(true)
  }

  getLogin() {
    return this.estaLogado
  }
}
