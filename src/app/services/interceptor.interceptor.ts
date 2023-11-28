import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InterceptorHandler implements HttpInterceptor {
    constructor(
        private loaderService: LoaderService
    ){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.mostrar()

        return next.handle(req).pipe(finalize(() => this.loaderService.esconder() ))
    }
}