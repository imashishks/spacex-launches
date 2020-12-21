import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { LaunchModel } from 'src/app/shared/models/launch.model';

fdescribe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ HttpService]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve posts from the API via GET', (done) => {
    const dummyData: Array<LaunchModel> = [{
      mission_name: 'RatSat',
      flight_number: 4,
      mission_id: [],
      launch_year: '2008',
      launch_success: true
    }];
    let params = new HttpParams();
    params = params.append('limit', '1');
    params = params.append('year', '2017');
    params = params.append('success_launch', 'true');
    service.Get<Array<LaunchModel>>('launches', params).subscribe((data: Array<LaunchModel>) => {
        expect(data.length).toBe(1);
        // expect(data[0]).toEqual(jasmine.objectContaining(dummyData[0]));
        done();
    });
  });
});
