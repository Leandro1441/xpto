import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface PixToSend {
  nome?: string,
  chave?: string
  tipoChave?: string
  valor?: number
}

export interface PixDestinatario {
    "nome": string,
    "instituicao_financeira": string,
    "numeroContaRemetente": number,
    "codigo": string,
    "mensagem": string  
}

export interface PixSaldo{
	"saldo": number,
	"nome": string,
	"limite_diario": number,
	"limite_noturno": number,
	"instituicao_financeira": string,
	"numeroContaRemetente": number,
	"codigo": string,
	"mensagem": string,
	"cpfJaEnviado": any[]
}

@Injectable({
  providedIn: 'root'
})
export class PixService {
  private mandarPara: PixToSend = {}

  constructor(
    private http: HttpClient
  ) { }

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

  async getChavePix(cpf: string, chavepix: string, tipoChavePix: string, token: string) {
    return await lastValueFrom(this.http
      .get<PixDestinatario>(`${environment.api}/tcc/consulta_destinatario?cpf_cnpj=${cpf}&chavepix=${chavepix}&tipoChavePix=${tipoChavePix}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }))
  }

  async getSaldo(cpf: string, token: string) {
    return await lastValueFrom(this.http
      .post<PixSaldo>(`${environment.api}/tcc/consulta`, {
        cpf_cnpj: cpf
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }))
  }

}
