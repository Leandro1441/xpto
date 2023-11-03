import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PixService } from '../services/pix.service';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.sass']
})
export class PixComponent {
  constructor(
    private router: Router,
    private pixService: PixService
  ) { 
    this.pixService.resetValor()
   }
  
  navegar(url: string) 
  {
    const arr = url === 'home' ? ['home'] : ['pix', 'contatos']
    this.router.navigate(arr)
  }
}
