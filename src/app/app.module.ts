import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GolfCourseService} from './services/GolfCourse.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// npm install @agm/core

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [GolfCourseService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
