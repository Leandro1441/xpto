import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public estaCarregando = new Subject<boolean>()

  constructor() { }

  mostrar() {
    this.estaCarregando.next(true)
  }

  esconder() {
    this.estaCarregando.next(false)
  }
}
