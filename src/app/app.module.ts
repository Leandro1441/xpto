import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoaderModule } from './loader/loader.module';
import { LoginComponent } from './login/login.component';
import { NovoContatoPixComponent } from './novo-contato-pix/novo-contato-pix.component';
import { PixConfirmarComponent } from './pix-confirmar/pix-confirmar.component';
import { PixContatosComponent } from './pix-contatos/pix-contatos.component';
import { PixDadosComponent } from './pix-dados/pix-dados.component';
import { pixTipoComponent } from './pix-tipo/pix-tipo.component';
import { PixComponent } from './pix/pix.component';
import { InterceptorHandler } from './services/Interceptor.interceptor';

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
    NovoContatoPixComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    BrowserModule,
    FormsModule,
    CurrencyMaskModule,
    HttpClientModule,
    LoaderModule
  ],
  providers: [
    provideNgxMask(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
