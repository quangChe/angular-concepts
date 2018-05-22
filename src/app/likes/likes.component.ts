import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
  // styles: [
  //   `
  //     i {
  //       color: red;
  //     }
  //   `
  // ]
})

export class LikesComponent {
  @Input('is-liked') starred: boolean;
  @Output('change') click = new EventEmitter();

  clickStar() {
    this.starred = !this.starred;
    this.click.emit({newValue: this.starred});
  }
}

export interface IsStarredObject {
  newValue: boolean;
}
