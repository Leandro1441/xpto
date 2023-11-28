import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import Swal from 'sweetalert2';
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
    private pixService: PixService
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
    await Swal.fire({
      title: 'SENHA DO APP',
      input: "text",
      showCancelButton: true,
      customClass: {
        validationMessage: 'my-validation-message',
      },
      preConfirm: (value) => {
        if (!value.value || value.value.length < 6 || value.value.length > 12) {
          Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Senha errada!')
          return false
        }
        return true
      }
    }).then(async v => {
      try {
        const coordinates = await Geolocation.getCurrentPosition()
        alert('lat: ' + coordinates.coords.latitude + ' lot: ' + coordinates.coords.longitude)
      }
      catch (e) {
        if (e instanceof (GeolocationPositionError)) {
          if (e.code == 1) {
            alert('Permita acessar usa localização!')
          }
        }
      }
    })



  }
}
