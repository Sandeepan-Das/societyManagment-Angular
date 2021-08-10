import { CredentialServiceService } from './../services/credential/credential-service.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class authIntercptor implements HttpInterceptor{
    constructor(private authService:CredentialServiceService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            headers:req.headers.set("authorization",`bearer ${localStorage.getItem("accessToken")}`)
        })
        return next.handle(newReq)
    }


}