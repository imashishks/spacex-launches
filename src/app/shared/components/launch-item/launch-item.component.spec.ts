import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchItemComponent } from './launch-item.component';
import { Component, ViewChild } from '@angular/core';

describe('LaunchItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  const testData = {
    mission_id: ['45'],
    mission_name: 'Test',
    flight_number: 0,
    launch_year: '2020',
    launch_success: true,
    launch_landing: true
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchItemComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    testHostComponent.launchItemComponent.launchData = testData;
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('spacex-launch-item')).toBeTruthy();
  });
  it('should have correct data', () => {
    console.log(testHostComponent);
    testHostComponent.launchItemComponent.launchData = testData;
    testHostFixture.detectChanges();
    const el = testHostFixture.nativeElement.querySelector('.header-primary');
    expect(el.textContent).toEqual(testData.mission_name + ' # ' + testData.flight_number);
  });
  @Component({
    selector: `spacex-host-component`,
    template: `<spacex-launch-item ></spacex-launch-item>`
  })
  class TestHostComponent {
    @ViewChild(LaunchItemComponent)
    public launchItemComponent: LaunchItemComponent;
  }
});
