import { Injectable } from '@angular/core';
import {LaunchModel} from '../../models/launch.model';
import { HttpService } from '../http/http.service';
import {  map } from 'rxjs/operators';
@Injectable()
export class LaunchService {
  private launchItem: LaunchModel;
  private launchList: Array<LaunchModel>;
  constructor(private httpService: HttpService) { }
  getLaunchItems(){
    console.log('dsfsdfsdf');
    return this.httpService.Get<Array<LaunchModel>>('launches').pipe(map((data) => {
      this.launchList = data;
      return data;
    }));
  }
}
