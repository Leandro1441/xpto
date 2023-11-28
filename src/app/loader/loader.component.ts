import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent {
  public carregando : boolean = false

  constructor(
    private loaderService: LoaderService
    ) {
      this.loaderService.estaCarregando.subscribe(v => {
        this.carregando = v
      })
    }

    

}
