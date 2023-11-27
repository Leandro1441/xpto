import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { PixSaldo, PixService } from '../services/pix.service';

@Component({
  selector: 'app-pix-contatos',
  templateUrl: './pix-contatos.component.html',
  styleUrls: ['./pix-contatos.component.sass']
})
export class PixContatosComponent implements OnInit {
  saldo: PixSaldo | undefined
  constructor(
    private router: Router,
    private pixService: PixService,
    private loginService: LoginService
  ) {
    this.pixService.resetValor()
  }

  async ngOnInit() {
    this.saldo = await this.pixService.getSaldo(this.loginService.getCpf(), this.loginService.getToken())
  }
  
  navegar(url: string) {
    const arr = url === 'pix' ? ['pix'] : ['pix', url]
    this.router.navigate(arr)
  }

  contatos() {
    this.pixService.setNome('Andre da silva')
    this.pixService.setChave('00000000000', 'CPF')
    this.pixService.setValor(0)

    this.navegar('dados')
  }
}
