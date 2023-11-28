import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Saldo } from '../types/auth.interface';
import { PixSaldo, PixService } from '../services/pix.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  valor = 0
  mostrarSaldo = true
  saldo: PixSaldo | undefined
  nome: string = ''

  constructor(
    private router: Router,
    private loginService: LoginService,
    private pixService: PixService
  ) { }

  async ngOnInit() {
    this.saldo = await this.pixService.getSaldo(this.loginService.getCpfCookie(), this.loginService.getTokenCookie())
    this.valor = this.saldo.saldo
    this.nome = this.saldo.nome
  }

  verSaldo() {
    this.mostrarSaldo = !this.mostrarSaldo
    const aberto = document.getElementById('olhoAberto')
    const fechado = document.getElementById('olhoFechado')
    if (!aberto || !fechado) return

    if (!this.mostrarSaldo) {
      fechado.classList.add('hidden')
      aberto.classList.remove('hidden')
    } else {
      fechado.classList.remove('hidden')
      aberto.classList.add('hidden')
    }
  }

  navegarParaPix() {
    this.router.navigate(['pix'])
  }
}
