import { Directive, HostListener, ElementRef, Input  } from '@angular/core';

// HostListener: listens to events on DOM
// ElementRef: captures an element's events (e.g., input value)

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input() appInputFormat;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;

    if (this.appInputFormat === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else if (this.appInputFormat === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
