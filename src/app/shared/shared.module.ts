import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
   LaunchItemComponent,
   CardComponent,
   FilterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Modules
    CommonModule,
    // Components
    LaunchItemComponent,
    CardComponent,
    FilterComponent,
  ],
})
export class SharedModule {}
