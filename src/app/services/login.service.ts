import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { lastValueFrom } from "rxjs";
import { environment } from 'src/environments/environment';
import { Login, Saldo } from "../types/auth.interface";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string = ''
  cpf: string = ''

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) { }

  getTokenCookie() {
    const token = this.cookieService.get('tcc_token')
    this.token = token
    return token
  }

  getCpfCookie() {
    const cpf = this.cookieService.get('tcc_cpf')
    this.cpf = cpf
    return cpf
  }

  setToken(token: string) {
    this.cookieService.set('tcc_token', token)
    this.token = token
  }

  setCpf(cpf: string) {
    this.cookieService.set('tcc_cpf', cpf)
    this.cpf = cpf
  }

  deleteToken() {
    this.cookieService.delete('tcc_token')
    this.cookieService.delete('tcc_cpf')
  }

  async validarLogin(cpf: string, senha: string) {
    const login = await this.login(cpf, senha)

    if (login.token) {
      this.setToken(login.token)
      this.setCpf(cpf)
    }
    else this.deleteToken()

    return !!login.token
  }

  async login(cpf: string, senha: string) {
    return await lastValueFrom(this.http
      .get<Login>(`${environment.api}/tcc/login?cpf_cnpj=${cpf}&senha=${senha}`))
  }

  ///////////////////// user //////////////////

  async validarToken() {
    try {
      return await lastValueFrom(this.http
        .get<Saldo>(`${environment.api}/tcc/saldo?cpf_cnpj=${this.getCpfCookie()}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getTokenCookie()}`
          }
        }))
    }
    catch (v) {
      if (v instanceof HttpErrorResponse && v.error?.codigo === "UNAUTHORIZED") {
        this.deleteToken()
        this.router.navigate(['login'])
      }
      return false
    }
  }
}
