import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { regexCpf } from '../validators/regexCpf.validator';


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
      cpf: ['35687422099', [Validators.required, regexCpf()]],
      senha: ['11111111', [Validators.required, Validators.minLength(8)]]
    })
  }

  validarLogin() {
    if (this.loginForm.invalid) return

    const cpf = this.loginForm.controls['cpf'].value
    const senha = this.loginForm.controls['senha'].value

    const logou = this.loginService.validarLogin(cpf, senha)
    
    if(!logou) return

    this.router.navigate(['home'])
  }

}


