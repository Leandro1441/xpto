import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PixService } from '../services/pix.service';

@Component({
  selector: 'app-pix-contatos',
  templateUrl: './pix-contatos.component.html',
  styleUrls: ['./pix-contatos.component.sass']
})
export class PixContatosComponent {
  constructor(
    private router: Router,
    private pixService: PixService
  ) { 
    this.pixService.resetValor()
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
