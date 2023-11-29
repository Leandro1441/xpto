import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validatorCpf } from '../../validators/regexCpf.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup = this.formBuilder.group({})
  maskCpf = '000.000.000-00'
  maskTelefone = '(00) 00000-0000'



  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      cpf: ['47327205870', [Validators.required, validatorCpf()]],
      nome: ['', [Validators.required, Validators.minLength(3), Validators.max(20)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.max(50)]],
      data_nascimento: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      telefone: ['', [Validators.maxLength(11), Validators.minLength(11)]],
      estado_civil: ['', Validators.required],
      nacionalidade: ['', Validators.required],
      lougradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      bairro: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required], 
      pais: ['', Validators.required],
      email: ['', Validators.required],
      senha_app: ['', Validators.required],
      tipo_chave_pix: ['', Validators.required],
      chave_pix: ['', Validators.required],
      senha_transacoes: ['', Validators.required],
      saldo: ['', Validators.required],
      limite_diaro: ['', Validators.required],
      limite_noturno: ['', Validators.required]
    })
  }
}
