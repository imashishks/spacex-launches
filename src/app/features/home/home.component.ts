import { Component, OnInit } from '@angular/core';
import {LoaderModel} from '../../shared/models/config.model';
@Component({
  selector: 'spacex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  loaderConfig: LoaderModel = {
    show: true,
    showFullScreen: true,
  };
  ngOnInit(): void {
  }

}
