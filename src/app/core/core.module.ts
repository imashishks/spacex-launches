import { NgModule } from '@angular/core';
import { HomeModule } from '../features/home/home.module';
import { HttpService } from './services/http/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderService } from './services/loader/loader.service';
import { LoaderInterceptor } from './services/loader-interceptor/loader-interceptor.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderComponent],
  imports: [HomeModule, HttpClientModule, CommonModule],
  exports: [
    // Modules
    HomeModule,
    CommonModule,
    // Components
    HeaderComponent,
    FooterComponent,
    LoaderComponent
   ],
  providers: [
    HttpService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class CoreModule {}
