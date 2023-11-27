import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { pixTipoComponent } from './pix-tipo/pix-tipo.component';
import { PixComponent } from './pix/pix.component';
import { PixConfirmarComponent } from './pix-confirmar/pix-confirmar.component';
import { PixDadosComponent } from './pix-dados/pix-dados.component';
import { PixContatosComponent } from './pix-contatos/pix-contatos.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NovoContatoPixComponent } from './novo-contato-pix/novo-contato-pix.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    pixTipoComponent,
    PixComponent,
    PixConfirmarComponent,
    PixDadosComponent,
    PixContatosComponent,
    CadastroComponent,
    NovoContatoPixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    BrowserModule,
    FormsModule,
    CurrencyMaskModule,
    HttpClientModule
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
