import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
   LoaderComponent,
   LaunchItemComponent,
   CardComponent,
   FilterComponent,
   HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // modules
    CommonModule,
    // Components
    LoaderComponent,
    LaunchItemComponent,
    CardComponent,
    FilterComponent,
    HeaderComponent
  ],
})
export class SharedModule {}
