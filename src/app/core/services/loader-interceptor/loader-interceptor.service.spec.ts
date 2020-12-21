import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader-interceptor.service';

describe('LoaderInterceptorService', () => {
  // let service: LoaderInterceptor;

  beforeEach(() => {
    let httpMock: HttpTestingController;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true,
        },
      ],
    });
    // service = TestBed.inject(LoaderInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should set ', () => {
    // expect(service).toBeTruthy();
  });
});
