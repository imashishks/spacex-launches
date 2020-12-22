import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
/**
 * Injectable - This service defines the behaviorsubject for loader
 */
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading = new BehaviorSubject(false);
  constructor() {}
}
