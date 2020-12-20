import { Component, OnInit, Input } from '@angular/core';
import { LaunchModel } from '../../models/launch.model';

@Component({
  selector: 'spacex-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.css']
})
export class LaunchItemComponent implements OnInit {
  @Input('data') launchData: LaunchModel;
  constructor() { }

  ngOnInit(): void {
  }

}
