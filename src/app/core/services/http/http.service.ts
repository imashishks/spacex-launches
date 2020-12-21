import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  private getURL(path: string): string {
    return environment.restApiUrl + path;
  }
  // Get Request
  Get<Response>(path: string, params?: HttpParams): Observable<Response> {
    return this.httpClient.get<Response>(this.getURL(path), {
      params,
    });
  }
}
