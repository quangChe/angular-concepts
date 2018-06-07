import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitlecasePipe implements PipeTransform {
  
  transform(value: string): any {
    if (!value) {
      return null;
    } else {
      let words = value.split(' ');

      for (let w = 0; w < words.length; w++) {
        if (this.isNotPreposition(words[w]) || w === 0) {
          words[w] = this.toTitleCase(words[w]);          
        } else {
          words[w] = words[w].toLowerCase();
        }
      }

      return words.join(' ');      
    }
  }

  private isNotPreposition(word) {
    let ignoreWords = ['a', 'of', 'and', 'the', 'from', 'by'];

    return !ignoreWords.includes(word.toLowerCase());
  }

  private toTitleCase(word) {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase(); 
  }

}
