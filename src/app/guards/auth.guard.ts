import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = async () => {
  const loginService = inject(LoginService)

  if(!loginService.cpf && !loginService.token) {
    await loginService.validarToken()
  }

  const token = loginService.getTokenCookie()
  const cpf = loginService.getCpfCookie()

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
