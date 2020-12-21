import { OnInit, Component, Input } from '@angular/core';
import { LoaderModel } from '../../models/config.model';
@Component({
  selector: 'spacex-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() config: LoaderModel;
  private defaultConfig = {
    show: true,
    showFullScreen: true,
  };
  ngOnInit(): void{
    this.config = { ...this.defaultConfig, ...this.config };
  }
}
