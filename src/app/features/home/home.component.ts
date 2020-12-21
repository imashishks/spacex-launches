import { Component, OnInit } from '@angular/core';
import {LoaderModel} from '../../shared/models/config.model';
import { LaunchService} from '../../shared/services/launch/launch.service';
import { LaunchModel } from 'src/app/shared/models/launch.model';
import { YEARS, LAUNCH_OPTIONS } from 'src/app/shared/constants/filter.constant';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'spacex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
  loaderConfig: LoaderModel = {
    show: true,
    showFullScreen: true,
  };
  launchItems: Array< LaunchModel>;
  selectedFilters = {
    limit: '60',
    year: '',
    successful_launch: null,
    successful_landing: null
  };
  ngOnInit(): void {
    this.updateParams();
  }
  yearFilterClicked(data): void {
    //  To ensure that we don't fetch data if the same filter is clicked
    if ( this.selectedFilters.year !== data ) {
      this.selectedFilters.year = data;
      this.getLaunchData();
    }
  }
  successfulLaunchFilterClicked(data): void{
    if ( this.selectedFilters.successful_launch !== data ) {
      this.selectedFilters.successful_launch = data;
      this.getLaunchData();
    }
  }
  successfulLandingFilterClicked(data): void{
    if ( this.selectedFilters.successful_landing !== data ) {
      this.selectedFilters.successful_landing = data;
      this.getLaunchData();
    }
  }
  getLaunchData(): void{
    this.loaderConfig = {...this.loaderConfig, ...{show: true}};
    this.updateRoute();
    this.launchService.getLaunchItems(this.selectedFilters).subscribe((resp) => {
      this.launchItems = [...resp];
      this.loaderConfig = {...this.loaderConfig, ...{show: false}};
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
    }).unsubscribe();
  }
}
