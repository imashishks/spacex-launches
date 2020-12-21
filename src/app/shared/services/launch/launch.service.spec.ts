import { TestBed } from '@angular/core/testing';

import { LaunchService } from './launch.service';
import { CoreModule } from 'src/app/core/core.module';
import { LaunchModel } from '../../models/launch.model';

describe('LaunchService', () => {
  let service: LaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [CoreModule], providers: [ LaunchService]});
    service = TestBed.inject(LaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be able to return an observable of Launch data', (done) => {
    const dummyData: Array<LaunchModel> = [{
      mission_name: 'RatSat',
      flight_number: 4,
      mission_id: [],
      launch_year: '2008',
      launch_success: true
    }];
    const selectedParams = {
      limit: 1,
      launch_year: '2017',
      launch_success : 'true',
      land_success: null
    };
    service.getLaunchItems(selectedParams).subscribe((data: Array<LaunchModel>) => {
         expect(data.length).toBe(1);
         expect(data[0]).toEqual(jasmine.objectContaining(dummyData[0]));
         done();
    });
  });
});
