import { CredentialServiceService } from './../services/credential/credential-service.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { catchError, filter, switchMap, take } from 'rxjs/operators';

@Injectable()
export class authIntercptor implements HttpInterceptor {
    constructor(private authService: CredentialServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = this.addToken(req)
        return next.handle(newReq).pipe(catchError((error: any) => {
            if (error instanceof HttpErrorResponse && error.status == 403) {
                return this.handle403Error(newReq, next)
            } else {
                return throwError(error)
            }
        }))
    }
    private addToken(req: HttpRequest<any>,token=localStorage.getItem("accessToken")) {
        return req.clone({
            headers: req.headers.set("authorization", `bearer ${token}`)
        })
    }
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    private handle403Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((token: any) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(token.accessToken);
                    return next.handle(this.addToken(request, token.accessToken));
                }));

        } else {
            return this.refreshTokenSubject.pipe(
                filter(token => token != null),
                take(1),
                switchMap(jwt => {
                    return next.handle(this.addToken(request, jwt));
                }));
        }
    }

}