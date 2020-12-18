import { NgModule } from '@angular/core';
import { HomeModule } from '../features/home/home.module';


@NgModule({
  declarations: [],
  imports: [HomeModule],
  exports: [HomeModule],
  providers: []
})
export class CoreModule {}
