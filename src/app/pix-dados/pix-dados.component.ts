import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PixService, PixToSend } from '../services/pix.service';
import { LoginService } from '../services/login.service';
import { Saldo } from '../types/auth.interface';

@Component({
  selector: 'app-pix-dados',
  templateUrl: './pix-dados.component.html',
  styleUrls: ['./pix-dados.component.sass']
})
export class PixDadosComponent implements OnInit {
  valor = ''

  mandarPara?: PixToSend
  options = {
    prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left'
  }

  saldo: Saldo | undefined
  constructor(
    private router: Router,
    private pixService: PixService,
    private loginService: LoginService
  ) { }

  async ngOnInit() {
    this.mandarPara = this.pixService.getObj()

    if(!this.mandarPara.chave ) this.navegar('pix')
    this.valor = this.mandarPara.valor?.toString() ?? ''

    this.saldo = await this.loginService.consultarSaldo()
  }

  navegar(url: string) {
    const arr = url === 'pix' ? ['pix'] : ['pix', url]
    this.router.navigate(arr)
  }

  getValorNumber() {
    return Number(this.valor)
  }

  validarValor() {
    const valor = this.getValorNumber()
    if (valor < 0.01) return alert('Valor de tranferencia invalido!')
    if(valor > (this.saldo?.saldo || 0)) return alert('Valor de tranferencia acima do saldo!')

    this.pixService.setValor(valor)
    this.router.navigate(['pix', 'confimar'])
  }
}
