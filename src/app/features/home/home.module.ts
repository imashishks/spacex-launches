import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import {LaunchService} from '../../shared/services/launch/launch.service';
@NgModule({
  declarations: [
      HomeComponent
  ],
  providers: [LaunchService],
  imports: [SharedModule ],
})
export class HomeModule {}
