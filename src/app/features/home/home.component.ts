import { Component, OnInit } from '@angular/core';
import { LaunchService} from '../../shared/services/launch/launch.service';
import { LaunchModel } from 'src/app/shared/models/launch.model';
import { YEARS, LAUNCH_OPTIONS } from 'src/app/shared/constants/filter.constant';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'spacex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private launchService: LaunchService, private router: Router, private activateRoute: ActivatedRoute) { }
  yearsFilterData = {
    title: 'Launch Year',
    data: YEARS
  };
  successfulLaunchFilterData = {
    title: 'Successful Launch',
    data: LAUNCH_OPTIONS
  } ;
  successfulLandingFilterData = {
    title: 'Successful Landing',
    data: LAUNCH_OPTIONS
  } ;
  launchItems: Array< LaunchModel>;
  selectedFilters = {
    limit: 1,
    launch_success: null,
    land_success: null,
    launch_year: '',
  };
  ngOnInit(): void {
    this.updateParams();
  }
  yearFilterClicked(data): void {
    //  To ensure that we don't fetch data if the same filter is clicked
    if ( this.selectedFilters.launch_year !== data ) {
      this.selectedFilters.launch_year = data;
      this.getLaunchData();
    }
  }
  successfulLaunchFilterClicked(data): void{
    if ( this.selectedFilters.launch_success !== data ) {
      this.selectedFilters.launch_success = data;
      this.getLaunchData();
    }
  }
  successfulLandingFilterClicked(data): void{
    if ( this.selectedFilters.land_success !== data ) {
      this.selectedFilters.land_success = data;
      this.getLaunchData();
    }
  }
  getLaunchData(): void{
    this.updateRoute();
    this.launchService.getLaunchItems(this.selectedFilters).subscribe((resp) => {
      this.launchItems = [...resp];
    });
  }
  updateRoute(): void{
    const objKeys = Object.keys(this.selectedFilters);
    const queryParams = {};
    objKeys.forEach( (key) => {
      if ( this.selectedFilters[key] && this.selectedFilters[key] !== 'false'){
        queryParams[key] = this.selectedFilters[key];
      }
    });
    this.router.navigate(
      [],
      {
        relativeTo: this.activateRoute,
        queryParams
      });
  }
  updateParams(): void{
    this.activateRoute.queryParams.subscribe(params => {
      this.selectedFilters = {...this.selectedFilters, ...params};
      this.getLaunchData();
    });
  }
}
