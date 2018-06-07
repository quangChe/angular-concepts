import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {
  @Input() heartData: object;

  ngOnInit() {
  }

  heartClicked() {
    // this.heartData.liked = !this.heartData.liked;
    // this.heartData.count += (this.heartData.liked) ? 1 : -1;
  }
}
