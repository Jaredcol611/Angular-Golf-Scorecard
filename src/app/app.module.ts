import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GolfCourseService} from './services/GolfCourse.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClient,
    FormsModule,
    CommonModule
  ],
  providers: [GolfCourseService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
