import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async () => {
  const estaLogado = inject(LoginService).getLogin()

  if(!estaLogado) {
    const router = inject(Router)

    await router.navigate(['login'])
    return false
  }

  return estaLogado
};
