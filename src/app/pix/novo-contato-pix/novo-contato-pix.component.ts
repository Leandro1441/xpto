import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { PixService } from '../../services/pix.service';
import { validatorCpf } from '../../validators/regexCpf.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-novo-contato-pix',
  templateUrl: './novo-contato-pix.component.html',
  styleUrls: ['./novo-contato-pix.component.sass']
})
export class NovoContatoPixComponent implements OnInit {
  maskCpf = '000.000.000-00'
  form: FormGroup = this.formBuilder.group({})


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pixService: PixService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required, validatorCpf()]],
    })
  }

  async validarCpf() {
    const cpf = this.form.controls['cpf'].value
    await this.pixService.getChavePix(this.loginService.getCpfCookie(), cpf, 'CPF', this.loginService.getTokenCookie())
      .then(cpfValid => {
        this.pixService.setChave(cpf, 'CPF')
        this.pixService.setNome(cpfValid.nome)
        this.navegar('dados')
      })
      .catch(async error => {
        if (error.status === 403) {
          await Swal.fire({
            title: 'CPF',
            text: 'Usuario não encontrado!',
            icon: 'error'
          })
        } else {
          await Swal.fire({
            title: 'CPF',
            text: 'Erro inesperado!',
            icon: 'error'
          })
        }
      })

  }

  navegar(url = 'tipo') {
    const arr = ['pix', url]
    this.router.navigate(arr)
  }
}
