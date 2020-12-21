import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { LazyImgDirective } from './directives/lazy-img/lazy-img.directive';


@NgModule({
  declarations: [
   LaunchItemComponent,
   CardComponent,
   FilterComponent,
   LazyImgDirective,
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
