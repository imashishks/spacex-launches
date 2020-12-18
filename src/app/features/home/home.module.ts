import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
      HomeComponent
  ],
  providers: [],
  imports: [SharedModule ],
})
export class HomeModule {}
