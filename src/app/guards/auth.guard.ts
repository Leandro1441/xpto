import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = async () => {
  const loginService = inject(LoginService)
  const token = loginService.getToken()
  const cpf = loginService.getCpf()

  const temToken = !!token.length
  const temCpf = !!cpf.length

  if (!temToken || !temCpf) {
    loginService.deleteToken()

    const router = inject(Router)
    await router.navigate(['login'])
    return false
  }

  return temToken
};
