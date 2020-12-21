import { Injectable } from '@angular/core';
import {LaunchModel} from '../../models/launch.model';
import { HttpService } from '../../../core/services/http/http.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterModel } from '../../models/filter.model';
@Injectable()
export class LaunchService {
  constructor(private httpService: HttpService) { }
  getLaunchItems(selectedFilters: FilterModel): Observable< Array<LaunchModel>>{
    let params = new HttpParams();
    params = params.append('limit', selectedFilters.limit);
    if (selectedFilters.year){
      params = params.append('year', selectedFilters.year);
    }
    if (selectedFilters.successful_launch){
      params = params.append('launch_success', selectedFilters.successful_launch);
    }
    if (selectedFilters.successful_landing){
      params = params.append('landing_success', selectedFilters.successful_landing);
    }
    return this.httpService.Get<Array<LaunchModel>>('launches', params);
  }
}
