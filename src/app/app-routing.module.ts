import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { pixTipoComponent } from './pix/pix-tipo/pix-tipo.component';
import { PixComponent } from './pix/pix.component';
import { PixConfirmarComponent } from './pix/pix-confirmar/pix-confirmar.component';
import { PixDadosComponent } from './pix/pix-dados/pix-dados.component';
import { PixContatosComponent } from './pix/pix-contatos/pix-contatos.component';
import { authGuard } from './guards/auth.guard';
import { CadastroComponent } from './pix/cadastro/cadastro.component';
import { NovoContatoPixComponent } from './pix/novo-contato-pix/novo-contato-pix.component';
import { RastreamentoComponent } from './rastreamento/rastreamento.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'rastreamento',
        component: RastreamentoComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'home',
        canActivate: [authGuard],
        component: HomeComponent
      },
      {
        path: 'pix',
        canActivate: [authGuard],
        children: [
          {
            path: '',
            component: PixComponent
          },
          {
            path: 'tipo',
            component: pixTipoComponent
          },
          {
            path: 'confimar',
            component: PixConfirmarComponent
          },
          {
            path: 'dados',
            component: PixDadosComponent
          },
          {
            path: 'contatos',
            component: PixContatosComponent
          },
          {
            path: 'novo-contato-pix',
            component: NovoContatoPixComponent
          },
        ]
      }, 
      {
        path: '',
        component: LoginComponent
      } 
    ],
  },
  {
    path: '**',
    redirectTo: 'login'
  }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
