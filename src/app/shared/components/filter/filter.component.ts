import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'spacex-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('config') filterData;
  @Input('selectedFilter') selectedItem: string | boolean | number;
  @Output() filterKey = new EventEmitter<string | boolean | number>();
  constructor() { }
  ngOnInit(): void {
    console.log(typeof(this.selectedItem));
  }
  itemClicked(item){
    this.selectedItem = item;
    this.filterKey.emit(item);
  }
}
