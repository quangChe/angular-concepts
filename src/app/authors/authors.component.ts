import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  title;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
    this.title = `Authors ${this.authors.length}`;
   }

  ngOnInit() {
  }

}
