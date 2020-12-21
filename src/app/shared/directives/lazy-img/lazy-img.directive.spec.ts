import { LazyImgDirective } from './lazy-img.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img />'
})
class TestComponent {

}
describe('LazyImgDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let imgEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyImgDirective, TestComponent ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    imgEl = fixture.debugElement.query(By.css('img'));
  });
  it('img should have a lazy loading attribute', () => {
    fixture.detectChanges();
    expect(imgEl.nativeElement.getAttribute('loading')).toEqual('lazy');

  });
});


