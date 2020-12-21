import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { Component, ViewChild } from '@angular/core';

describe('FilterComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should be created', () => {
    testHostComponent.filterComponent.filterData = {
      title: 'Test',
      data : ['test1', 'test2']
    };
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('spacex-filter')).toBeTruthy();
  });
  it('should have the correct title', () => {
    const testData = {
      title: 'Test',
      data : ['test1', 'test2']
    };
    testHostComponent.filterComponent.filterData = testData;
    testHostFixture.detectChanges();
    const el = testHostFixture.nativeElement.querySelector('.paragraph');
    expect(el.textContent).toEqual(testData.title);
  });
  it('should return corrected selected filter', () => {
    const testData = {
      title: 'Test',
      data : ['test1', 'test2']
    };
    testHostComponent.filterComponent.filterData = testData;
    testHostFixture.detectChanges();
    spyOn( testHostComponent.filterComponent.filterKey, 'emit');
    const button = testHostFixture.nativeElement.querySelector('.button');
    button.dispatchEvent(new Event('click'));
    testHostFixture.detectChanges();
    expect(testHostComponent.filterComponent.filterKey.emit).toHaveBeenCalledWith('test1');

  });
  @Component({
    selector: `spacex-host-component`,
    template: `<spacex-filter ></spacex-filter>`
  })
  class TestHostComponent {
    @ViewChild(FilterComponent)
    public filterComponent: FilterComponent;
  }
});
