import { Component, OnInit } from '@angular/core';
import {LoaderModel} from '../../shared/models/config.model';
import { LaunchService} from '../../shared/services/launch/launch.service';
@Component({
  selector: 'spacex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private launchService: LaunchService) { }
  loaderConfig: LoaderModel = {
    show: true,
    showFullScreen: true,
  };
  ngOnInit(): void {
    this.launchService.getLaunchItems().subscribe((resp) => {
      console.log(resp);
      this.loaderConfig = {...this.loaderConfig, ...{show:false}};
    });
  }

}
