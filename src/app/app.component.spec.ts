import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoaderComponent } from './core/components/loader/loader.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';

describe('AppComponent', () => {
  let fixture ;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        LoaderComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spacex'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spacex');
  });
  it('should render the loader', () => {
    expect(fixture.nativeElement.querySelector('spacex-loader')).toBeTruthy();
  });
  it('should have a router outlet', () => {
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
  });
  it('should render the header component', () => {
    expect(fixture.nativeElement.querySelector('spacex-header')).toBeTruthy();
  });
  it('should render the footer component', () => {
    expect(fixture.nativeElement.querySelector('spacex-footer')).toBeTruthy();
  });

});
