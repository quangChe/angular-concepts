import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { LikesComponent } from './likes/likes.component';
import { TitlecasePipe } from './titlecase.pipe';
import { PanelComponent } from './panel/panel.component';
import { HeartComponent } from './heart/heart.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  // Where we add all the components that're part of the module
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    LikesComponent,
    TitlecasePipe,
    PanelComponent,
    HeartComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
