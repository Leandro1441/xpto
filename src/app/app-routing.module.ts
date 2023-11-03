import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { pixTipoComponent } from './pix-tipo/pix-tipo.component';
import { PixComponent } from './pix/pix.component';
import { PixConfirmarComponent } from './pix-confirmar/pix-confirmar.component';
import { PixDadosComponent } from './pix-dados/pix-dados.component';
import { PixContatosComponent } from './pix-contatos/pix-contatos.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
