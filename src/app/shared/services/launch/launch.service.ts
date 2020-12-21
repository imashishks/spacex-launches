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
    params = params.append('limit', selectedFilters.limit.toString());
    if (selectedFilters.launch_success){
      params = params.append('launch_success', selectedFilters.launch_success);
    }
    if (selectedFilters.land_success){
      params = params.append('land_success', selectedFilters.land_success);
    }
    if (selectedFilters.launch_year){
      params = params.append('launch_year', selectedFilters.launch_year.toString());
    }
    return this.httpService.Get<Array<LaunchModel>>('launches', params);
  }
}
