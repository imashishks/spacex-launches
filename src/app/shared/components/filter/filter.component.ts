import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'spacex-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input('config') filterData;
  @Input('selectedFilter') selectedItem: string ;
  @Output() filterKey = new EventEmitter<string >();
  itemClicked(item: string): void{
    this.selectedItem = item;
    this.filterKey.emit(item);
  }
}
