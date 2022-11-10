import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, map} from "rxjs/operators";
import { ToasterService } from '../tosterservice/toaster.service';
import { LoaderService } from 'src/app/module/shared/services/loader.service';


        /**
         * This Interceptor used for error handling globaly at every api requests
         */

        
@Injectable()
export class ApiErrorhandlingInterceptor implements HttpInterceptor {


  constructor(private toserService: ToasterService, private loader : LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request) .pipe(      
      map(res => {
                  // console.log("Passed through the interceptor in response");
          return res
      }),
      catchError((error: HttpErrorResponse) => {
        // this.loader.hide()
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
              // console.log('This is client side error');
              errorMsg = `Error: ${error.error}`;
          } else {
              // console.log('This is server side error',error);
              errorMsg = `Error Code: ${error.status},  Message: ${error.error.error}`;
          }
          this.toserService.openToastMessage(error['error']['error'], `${error['status']}`);
          // console.log(errorMsg, error?.error?.error, "test");
             return throwError(error);
      })
  );
  }
}
