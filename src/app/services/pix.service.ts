import { Injectable } from '@angular/core';

export interface PixToSend {
  nome?: string,
  chave?: string
  tipoChave?: string
  valor?: number
}

@Injectable({
  providedIn: 'root'
})
export class PixService {
  private mandarPara: PixToSend = {}

  constructor() { }

  setNome(nome: string) {
    this.mandarPara.nome = nome
  }

  setChave(chave: string, tipoChave: string) {
    this.mandarPara.chave = chave
    this.mandarPara.tipoChave = tipoChave
  }

  setValor(valor: number) {
    this.mandarPara.valor = valor
  }

  getObj() {
    return this.mandarPara
  }

  resetValor() {
    this.mandarPara = {}
  }
}
