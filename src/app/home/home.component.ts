import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Saldo } from '../types/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  valor = 5000
  mostrarSaldo = true
  saldo: Saldo | undefined
  nome: string = ''

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  async ngOnInit() {
    this.saldo = await this.loginService.consultarSaldo()
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
