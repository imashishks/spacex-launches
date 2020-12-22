import { Component, OnInit } from '@angular/core';
import { LaunchService} from '../../shared/services/launch/launch.service';
import { LaunchModel } from 'src/app/shared/models/launch.model';
import { YEARS, LAUNCH_OPTIONS } from 'src/app/shared/constants/filter.constant';
import {Router, ActivatedRoute} from '@angular/router';
/**
 * Home component is the parent component which has the filters as well as the list
 */
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
    limit: 100,
    launch_success: null,
    land_success: null,
    launch_year: null,
  };
  ngOnInit(): void {
    this.updateParams();
  }
  /**
   * Years filter clicked
   * @param data :this is the year which was clicked
   */
  yearFilterClicked(data: string ): void {
    //  To ensure that we don't fetch data if the same filter is clicked
    if ( this.selectedFilters.launch_year !== data ) {
      this.selectedFilters.launch_year = data;
      this.getLaunchData();
    }
  }
  /**
   * Successfuls launch filter clicked
   * @param data this is the option which was clicked for successful launch
   */
  successfulLaunchFilterClicked(data: string): void{
    if ( this.selectedFilters.launch_success !== data ) {
      this.selectedFilters.launch_success = data;
      this.getLaunchData();
    }
  }
  /**
   * Successfuls landing filter clicked
   * @param data : this is the option which was clicked for successful landing
   */
  successfulLandingFilterClicked(data: string): void{
    if ( this.selectedFilters.land_success !== data ) {
      this.selectedFilters.land_success = data;
      this.getLaunchData();
    }
  }
  /**
   * Gets launch data :updates the route as well as fetches the launch items using the launch service
   */
  getLaunchData(): void{
    this.updateRoute();
    this.launchService.getLaunchItems(this.selectedFilters).subscribe((resp) => {
      this.launchItems = [...resp];
    });
  }
  /**
   * Updates route: wuth the updated params
   */
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
  /**
   * Updates params: is called on ngOnInit.It updates the params as per selected params in the route
   */
  updateParams(): void{
    this.activateRoute.queryParams.subscribe(params => {
      this.selectedFilters = {...this.selectedFilters, ...params};
      this.getLaunchData();
    });
  }
}
