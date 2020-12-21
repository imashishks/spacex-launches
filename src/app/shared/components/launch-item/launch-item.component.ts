import { Component, OnInit, Input } from '@angular/core';
import { LaunchModel } from '../../models/launch.model';

@Component({
  selector: 'spacex-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.css']
})
export class LaunchItemComponent{
  @Input('data') launchData: LaunchModel;
}
