import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CpfJaEnviado, PixSaldo, PixService } from '../../services/pix.service';


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
    this.saldo = await this.pixService.getSaldo(this.loginService.getCpfCookie(), this.loginService.getTokenCookie())
  }

  navegar(url: string) {
    const arr = url === 'pix' ? ['pix'] : ['pix', url]
    this.router.navigate(arr)
  }

  contatos(contato: CpfJaEnviado) {
    this.pixService.setNome(contato.nome)
    this.pixService.setChave(contato.chave_pix, 'CPF')
    this.pixService.setValor(0)

    this.navegar('dados')
  }

  transformar(value: string | number,
    ocultarAlgunsValores: boolean = false): string {
    let valorFormatado = value + '';

    valorFormatado = valorFormatado
      .padStart(11, '0')
      .substr(0, 11)
      .replace(/[^0-9]/, '')
      .replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      );

    if (ocultarAlgunsValores) {
      valorFormatado =
        'XXX.' + valorFormatado.substr(4, 7) + '-XX';
    }

    return valorFormatado;
  }
}
