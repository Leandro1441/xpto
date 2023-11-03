import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  valor = 5000
  mostrarSaldo = true

  constructor(
    private router: Router
  ) {  }

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
