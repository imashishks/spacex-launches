import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spacex-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('config') filterData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.filterData);
  }
  test(event){
    // console.log(event.target.toggleClass("button--active"));
  }

}
