import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-tipo',
  templateUrl: './pix-tipo.component.html',
  styleUrls: ['./pix-tipo.component.sass']
})
export class pixTipoComponent {
  constructor(
    private router: Router
  ) {  }

  
  navegar(url: string) 
  {
    const arr = ['pix', url]
    this.router.navigate(arr)
  }
}
