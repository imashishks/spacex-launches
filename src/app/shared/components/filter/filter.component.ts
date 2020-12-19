import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'spacex-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('config') filterData;
  @Output() filterKey = new EventEmitter<string>();
  constructor() { }
  selectedItem: string;
  ngOnInit(): void {
  }
  itemClicked(item){
    this.selectedItem = item;
    this.filterKey.emit(item);
  }

}
