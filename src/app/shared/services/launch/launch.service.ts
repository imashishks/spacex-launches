import { Injectable } from '@angular/core';
import {LaunchModel} from '../../models/launch.model';
import { HttpService } from '../http/http.service';
import {  map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class LaunchService {
  private launchItem: LaunchModel;
  private launchList: Array<LaunchModel>;
  constructor(private httpService: HttpService) { }
  getLaunchItems(selectedFilters){
    let params = new HttpParams();
    params = params.append('limit', '1');
    if (selectedFilters.year){
      params = params.append('year', selectedFilters.year);
    }
    if (selectedFilters.successfulLaunch){
      params = params.append('launch_success', selectedFilters.successfulLaunch);
    }
    if (selectedFilters.successfulLanding){
      params = params.append('landing_success', selectedFilters.successfulLanding);
    }

    // params = params.append('limit', selectedFilters.limit);
    // params = params.append('sortBy', selectedFilters.sortBy);

    return this.httpService.Get<Array<LaunchModel>>('launches', params).pipe(map((data) => {
      this.launchList = data;
      return data;
    }));
  }
}
