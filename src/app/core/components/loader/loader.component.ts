import {  Component } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
/**
 * Loader Component - Has the template for showing a loader based on the value returned from Laoder service
 */
@Component({
  selector: 'spacex-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})

export class LoaderComponent{
  loading: boolean;
  constructor(private loaderService: LoaderService){
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }
}
