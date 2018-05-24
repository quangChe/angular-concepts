import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  category = [
    {id: 1, name: 'Maths'},
    {id: 1, name: 'Codings'},
    {id: 1, name: 'Literatures'}
  ];

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form.value);
    alert('Thank you for sumitting the form!');
  }

}
