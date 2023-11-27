import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regexCpf } from '../validators/regexCpf.validator';
import { PixService } from '../services/pix.service';
import { LoginService } from '../services/login.service';

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
      cpf: ['21547686952', [Validators.required, regexCpf()]],
    })
  }

  async validarCpf() {
    const cpf = this.form.controls['cpf'].value
    const cpfValid = await this.pixService.getChavePix(this.loginService.getCpf(), cpf, 'CPF', this.loginService.getToken())

    this.pixService.setChave(cpf, 'CPF')
    this.pixService.setNome(cpfValid.nome)
    
    if(cpfValid) this.navegar('dados') 
  }

  navegar(url = 'tipo') {
    const arr = ['pix', url ]
    this.router.navigate(arr)
  }
}
