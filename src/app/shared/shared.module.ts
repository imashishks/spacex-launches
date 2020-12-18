import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';


@NgModule({
  declarations: [
   LoaderComponent,
   LaunchItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // modules
    CommonModule,
    // Components
    LoaderComponent,
    LaunchItemComponent
  ],
})
export class SharedModule {}
