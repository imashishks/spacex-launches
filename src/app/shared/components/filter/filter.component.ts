import { Component, Input, Output, EventEmitter} from '@angular/core';
/**
 * Filter Component-  to render the filter items and return the selected filter
 */
@Component({
  selector: 'spacex-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  @Input('config') filterData;
  @Input('selectedFilter') selectedItem: string ;
  @Output() filterKey = new EventEmitter<string >();
  /**
   * Items clicked
   * @param item - is the selected filter item
   */
  itemClicked(item: string): void{
    this.selectedItem = item;
    this.filterKey.emit(item);
  }
}
