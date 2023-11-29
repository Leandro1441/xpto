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

export interface PixSaldo {
  "saldo": number,
  "nome": string,
  "limite_diario": number,
  "limite_noturno": number,
  "instituicao_financeira": string,
  "numeroContaRemetente": number,
  "codigo": string,
  "mensagem": string,
  cpfJaEnviado: CpfJaEnviado[]
}

export interface CpfJaEnviado {
  "cpf_cnpj": string
  "chave_pix": string
  "nome": string
}[]

export interface PixParaMandar {
  "cpf_remetente": string
  "chave_pix_destinatario": string
  "observacao": string
  "valor_transferencia": number
  "localizacao_ransferencia": string
  "senha": string
}


export interface PixComprovante {
  "valortransferencia": number
  "dataTransferencia": string
  "horaTransferencia": string
  "nomeDestinatario": string
  "nomeRemetente": string
  "cpfRemetente": string
  "cpfDestinatario": string
  "codigoValidacao": string
  "mensagem": string
  "codigo": string
}



export interface TransacaoRastreavel {
  cpfCnpj: string
  idTransferencia: string
}

export interface TransacaoDetalhe {
  "cpfCnpj": string
  "cpfCnpjDestinatario": string
  "localizacaoTransferencia": string
  "chavePixDestinatario": string
  "dataTransferencia": string
  "horaTransderencia": string
  "tipoTransferencia": string
  "idTransferencia": string
}

@Injectable({
  providedIn: 'root'
})
export class PixService {
  private mandarPara: PixToSend = {}

  constructor(
    private http: HttpClient
  ) {

  }

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

  async getTransacoesRastreaveis(cpf?: string) {
    const query = `?cpf=${cpf}`
    return await lastValueFrom(this.http
      .get<TransacaoRastreavel[]>(`${environment.api}/tcc/consulta_cpf${query}`))
  }

  async getDadosTransacoes(cpf: string, idTransferencia: string) {
    return await lastValueFrom(this.http
      .get<TransacaoDetalhe[]>(`${environment.api}/tcc/detalhes?cpf=${cpf}&idTransferencia=${idTransferencia}`))
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


  async enviarPix(dto: PixParaMandar, token: string) {
    return await lastValueFrom(this.http
      .post<PixComprovante>(`${environment.api}/tcc/pix`, dto, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }))
  }

}
