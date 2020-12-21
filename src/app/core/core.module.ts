import { NgModule } from '@angular/core';
import { HomeModule } from '../features/home/home.module';
import { HttpService } from './services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [HomeModule, HttpClientModule],
  exports: [
    // Modules
    HomeModule,
    // Components
    HeaderComponent,
    FooterComponent
   ],
  providers: [HttpService]
})
export class CoreModule {}
