import { Directive, HostListener  } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @HostListener('focus') onFocus() {
    console.log('Focusing');
  }

  @HostListener('blur') onBlur() {
    console.log('Blurring');
  }

  constructor() { }

}
