import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { regexCpf } from '../validators/regexCpf.validator';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  // standalone: true
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({})
  mask = '000.000.000-00'

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [Validators.required, regexCpf()]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  async validarLogin() {
    if (this.loginForm.invalid) return

    const cpf = this.loginForm.controls['cpf'].value
    const senha = this.loginForm.controls['senha'].value

    const logou = await this.loginService.validarLogin(cpf, senha).catch(async v => {
      if (v && v instanceof HttpErrorResponse) {
        await Swal.fire({
          text: v.error.mensagem,
          title: 'LOGIN',
          icon: 'error'
        })
      }
    })

    if (!logou) return
    this.router.navigate(['home'])
  }

  irCadastro() {
    this.router.navigate(['cadastro'])
  }

}


