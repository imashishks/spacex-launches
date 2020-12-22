import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { tap } from 'rxjs/operators';
/**
 * Injectable - This interceptor is used to update the behaviorsubject for loader to show / hide the observable
 */
@Injectable()

export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoaderService) { }
  counter = 0;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.counter++;
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.counter--;
            if (!this.counter) {
              this.loaderService.isLoading.next(false);
            }
          }
        },
        (err: any) => {
          this.counter--;
          if (!this.counter) {
              this.loaderService.isLoading.next(false);
            }
        }
      )
    );
  }
}
