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
/**
 * Injectable
 * This is a generic service to make HTTP requests
 */
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  private getURL(path: string): string {
    return environment.restApiUrl + path;
  }
  /**
   * Get http service
   * @param path - This is the API path
   * @param [params]  - This is a list of params of type HttpParams
   * @returns - An Observable of the return type mentioned
   */
  Get<Response>(path: string, params?: HttpParams): Observable<Response> {
    return this.httpClient.get<Response>(this.getURL(path), {
      params,
    });
  }
}
