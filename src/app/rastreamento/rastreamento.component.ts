import { Component, OnInit } from '@angular/core';
import { PixService, TransacaoDetalhe, TransacaoRastreavel } from '../services/pix.service';

@Component({
  selector: 'app-rastreamento',
  templateUrl: './rastreamento.component.html',
  styleUrls: ['./rastreamento.component.sass']
})
export class RastreamentoComponent implements OnInit {
  constructor(
    private pixService: PixService
  ) { }

  dados: TransacaoRastreavel[] = []
  detalhe: TransacaoDetalhe | undefined
  timeout: any
  search = ''

  async ngOnInit() {
    this.getTransacoesRastreaveis(true)
  }

  async getTransacoesRastreaveis(skipTimeout = false) {
    if (this.timeout) clearTimeout(this.timeout)

    this.timeout = setTimeout(async () => {
      this.dados = await this.pixService.getTransacoesRastreaveis(this.search)
    }, !skipTimeout ? 700 : 0)

  }

  async verDetalhe(cpf: string, idTransferencia: string) {
    const detalhes = await this.pixService.getDadosTransacoes(cpf, idTransferencia)
    this.detalhe = detalhes ? detalhes[0] : undefined
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

  listar(){
    this.detalhe = undefined
  }

  openMaps(local: string) {
    const latLot = local.trim().replace(' ', '').replace('lat:', '').replace('lot:','').split(';')
    const url = 'https://www.google.com/maps/place/' + latLot[0] + ' ' + latLot[1]
    window.open(url)
  }


}
