import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';
import { PixService, PixToSend } from '../services/pix.service';

@Component({
  selector: 'app-pix-confirmar',
  templateUrl: './pix-confirmar.component.html',
  styleUrls: ['./pix-confirmar.component.sass']
})
export class PixConfirmarComponent implements OnInit {
  mandarPara?: PixToSend

  constructor(
    private router: Router,
    private pixService: PixService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.mandarPara = this.pixService.getObj()
    if (!this.mandarPara.chave) this.navegar('pix')
  }

  navegar(url: string) {

    const arr = url === 'dados' ? ['pix', 'dados'] : [url]

    this.router.navigate(arr)
  }

  async pagar() {

    var pass = ''
    await Swal.fire({
      title: 'SENHA',
      input: 'password',
      showCancelButton: true,
      customClass: {
        validationMessage: 'my-validation-message',
      },
      preConfirm: (value) => {
        if (!value || value.length < 6 || value.length > 12) {
          Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Senha errada4!')
          return false
        }

        pass = value
        return true
      }
    }).then(async v => {
      console.log("🚀 ~ file: pix-confirmar.component.ts:55 ~ PixConfirmarComponent ~ pagar ~ v:", v)
      try {
        if (v.dismiss == Swal.DismissReason.cancel || v.dismiss == Swal.DismissReason.backdrop) return      
        const coordinates = await Geolocation.getCurrentPosition()

        await this.pixService.enviarPix({
          cpf_remetente: this.loginService.getCpfCookie(),
          chave_pix_destinatario: this.mandarPara!.chave!,
          senha: pass,
          valor_transferencia: this.mandarPara!.valor!,
          localizacao_ransferencia: 'lat:' + coordinates.coords.latitude + ';lot:' + coordinates.coords.longitude,
          observacao: ''
        }, this.loginService.getTokenCookie()).then(async v => {
          if (v.dataTransferencia) {
            await Swal.fire({
              text: 'Transferencia feita com sucesso!',
              title: 'PIX',
            }).then(() => {
              this.router.navigate(['home'])
            })
          }
        }).catch(async v => {
          if (v && v instanceof HttpErrorResponse) {
            await Swal.fire({
              text: v.error.mensagem,
              title: 'PIX',
              icon: 'error'
            }).then(() => {
              this.pagar()
            })
          }
        })
      }
      catch (e) {
        console.log("🚀 ~ file: pix-confirmar.component.ts:88 ~ PixConfirmarComponent ~ pagar ~ e:", e)
        if (e instanceof (GeolocationPositionError)) {
          if (e.code == 1) {
            await Swal.fire({
              text: 'Permita acessar usa localização!',
              title: 'PIX',
              icon: 'error'
            })
          }
        }
      }
    })



  }
}
