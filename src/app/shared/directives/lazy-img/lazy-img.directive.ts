import { ElementRef, Directive } from '@angular/core';
/**
 * Directive - It adds a lazy loading attribute to images if it is supported
 */
// tslint:disable-next-line: directive-selector
@Directive({ selector: 'img' })
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
