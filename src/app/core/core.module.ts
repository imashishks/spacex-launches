import { NgModule } from '@angular/core';
import { HomeModule } from '../features/home/home.module';
import { HttpService } from '../shared/services/http/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HomeModule, HttpClientModule],
  exports: [HomeModule],
  providers: [HttpService]
})
export class CoreModule {}
