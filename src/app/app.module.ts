// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Services
import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';
import { PostsService } from './services/posts.service';

// Directives
import { InputFormatDirective } from './directives/input-format.directive';

// Pipes
import { SummaryPipe } from './pipes/summary.pipe';
import { TitlecasePipe } from './pipes/titlecase.pipe';

// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { LikesComponent } from './components/likes/likes.component';
import { PanelComponent } from './components/panel/panel.component';
import { HeartComponent } from './components/heart/heart.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PostsComponent } from './components/posts/posts.component';

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
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    TestFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponent
  ],
  // Where we add all the modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // Where we add all the services
  providers: [
    CoursesService,
    AuthorsService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
