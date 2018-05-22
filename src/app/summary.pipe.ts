import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: any, limit?: number, anotherArg?: boolean, moreArg?: string) {
    if (!value) {
      return null;
    } else {
      let charLimit = (limit) ? limit : 50; // If limit, use limit, else use 50
      return value.substr(0, charLimit) + '...';
    }
  }
}
