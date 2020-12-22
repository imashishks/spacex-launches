import {  ComponentFixture, async, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { LaunchService } from 'src/app/shared/services/launch/launch.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FilterComponent, CardComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ LaunchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a Home component', () => {
    expect(component).toBeTruthy();
  });
  it(`should render 3 filters`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const filter = compiled.querySelectorAll('spacex-filter');
    expect(filter).toBeTruthy();
    expect(filter.length).toEqual(3);
  });
  it(`should render items equal to the params limit`, async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    const limit = component.selectedFilters.limit;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const filter = compiled.querySelectorAll('spacex-launch-item');
      expect(filter).toBeTruthy();
      expect(filter.length).toEqual(limit);
    });
  }));

  it(`should select the correct year filter`, async(() => {
    fixture.detectChanges();
    component.ngOnInit();
    const year = '2007';
    component.yearFilterClicked(year);
    expect(component.selectedFilters.launch_year).toBe(year);
  }));

  it(`should select the correct launch filter`, async(() => {
    fixture.detectChanges();
    component.ngOnInit();
    const launch = 'false';
    const selectedParams = {
      limit: 1,
      launch_success : 'true',
      land_success: null,
      launch_year: '2017',
    };
    component.selectedFilters = selectedParams;
    component.successfulLaunchFilterClicked(launch);

    expect(component.selectedFilters.launch_success).toBe(launch);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const items = component.launchItems;
      items.forEach((element) => {
        expect(element.launch_success).toEqual(launch === 'false');
      });

    });
  }));
  it(`should select the correct landing filter`, async(() => {
    fixture.detectChanges();
    component.ngOnInit();
    const landing = 'false';
    const selectedParams = {
      limit: 1,
      launch_success : 'true',
      land_success: null,
      launch_year: '2017',
    };
    component.selectedFilters = selectedParams;
    component.successfulLandingFilterClicked(landing);

    expect(component.selectedFilters.land_success).toBe(landing);
  }));
});
