import { Component } from '@angular/core'; // Import component decorator
import { CoursesService } from '../../services/courses.service';


// Use the component decorator
@Component({
  selector: 'app-courses', // <courses>
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  title = 'List of Courses';
  imageURL = 'https://cdn-images-1.medium.com/max/1187/1*JsyV8lXMuTbRVLQ2FPYWAg.png';
  isActive = true;
  courses;
  storedValue = 'No Change';
  storedValue2 = 'testing123';
  storedValue3 = 'testing321';
  text = 'Dolore et amet nostrud laboris sunt. Anim ipsum excepteur ipsum consequat aute magna ad id sit ea.' +
         'Non ullamco tempor ipsum exercitation. Sunt incididunt in officia fugiat elit consectetur veniam ut' +
         'laborum deserunt ex sint. Labore aliquip ad exercitation adipisicing aute aliqua magna enim officia' +
         'quis deserunt reprehenderit non. Incididunt aliqua exercitation excepteur ut consequat.';

  course1 = {
    title: 'maths for dummies',
    rating: 4.99999,
    students: 12342,
    price: 23.99,
    releaseDate: new Date(2016, 3, 1)
  };

  constructor(service: CoursesService) {
    // 'new CoursesService' tightly couples component with implementation and can't change at runtime
    this.courses = service.getCourses();
  }

  noClick() {
    console.log('This should not be showing if you stop propagation of event.');
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button clicked!');
    console.log($event);
  }

  unfilteredKeyUp($event) {
    if ($event.keyCode === 13) { console.log('ENTER!'); }
  }

  filteredKeyUp() {
    console.log('ENTER 2.0!');
  }

  onKeyUp($event) {
    console.log($event.target.value);
  }

  onKeyUp2(value) {
    console.log(value);
  }

  onKeyUp3() {
    console.log(this.storedValue);
  }

  onKeyUp4() {
    console.log(this.storedValue2);
  }

  onKeyUp5() {
    console.log(this.storedValue3);
  }
}
