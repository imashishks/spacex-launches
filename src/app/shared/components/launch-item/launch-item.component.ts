import { Component, OnInit, Input } from '@angular/core';
import { LaunchModel } from '../../models/launch.model';
/**
 * Launch Item Component renders and individual launch item
 * @Input data - This is the data which is to be rendered on the template
 */
@Component({
  selector: 'spacex-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.scss']
})

export class LaunchItemComponent{
  @Input('data') launchData: LaunchModel;
}
