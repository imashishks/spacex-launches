import { Component, OnInit } from '@angular/core';
import {LoaderModel} from '../../shared/models/config.model';
import { LaunchService} from '../../shared/services/launch/launch.service';
import { LaunchModel } from 'src/app/shared/models/launch.model';
import { YEARS, LAUNCH_OPTIONS } from 'src/app/shared/constants/filter.constant';
@Component({
  selector: 'spacex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private launchService: LaunchService) { }
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
    year: '',
    successfulLaunch: null,
    successfulLanding: null
  };
  ngOnInit(): void {
    this.getLaunchData();
  }
  yearFilterClicked(data){
    console.log(data);
    //  To ensure that we don't fetch data if the same filter is clicked
    if ( this.selectedFilters.year !== data ) {
      this.selectedFilters.year = data;
      this.getLaunchData();
    }
  }
  successfulLaunchFilterClicked(data){
    console.log(data);
    if ( this.selectedFilters.successfulLaunch !== data ) {
      this.selectedFilters.successfulLaunch = data;
      this.getLaunchData();
    }
  }
  successfulLandingFilterClicked(data){
    if ( this.selectedFilters.successfulLanding !== data ) {
      this.selectedFilters.successfulLanding = data;
      this.getLaunchData();
    }
  }
  getLaunchData(){
    this.loaderConfig = {...this.loaderConfig, ...{show: true}};
    this.launchService.getLaunchItems(this.selectedFilters).subscribe((resp) => {
      this.launchItems = [...resp];
      this.loaderConfig = {...this.loaderConfig, ...{show: false}};
    });
  }
}
