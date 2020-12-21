import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
   LoaderComponent,
   LaunchItemComponent,
   CardComponent,
   FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Modules
    CommonModule,
    // Components
    LoaderComponent,
    LaunchItemComponent,
    CardComponent,
    FilterComponent
  ],
})
export class SharedModule {}
