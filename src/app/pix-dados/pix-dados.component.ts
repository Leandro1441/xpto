import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PixService, PixToSend } from '../services/pix.service';

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
  constructor(
    private router: Router,
    private pixService: PixService
  ) { }

  ngOnInit() {
    this.mandarPara = this.pixService.getObj()
    this.valor = this.mandarPara.valor?.toString() ?? ''
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
    if (valor < 0.01) return

    this.pixService.setValor(valor)
    this.router.navigate(['pix', 'confimar'])
  }
}
