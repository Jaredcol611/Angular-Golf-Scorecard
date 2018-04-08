import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GolfCourseService} from './services/GolfCourse.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScorecardComponent} from './Scorecard/scorecard.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './PageNotFound/PageNotFound.component';


// npm install @agm/core

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'card', component: ScorecardComponent},
  {path: '', redirectTo: './home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    PageNotFoundComponent
  ],
  imports: [
    MaterialModule,
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
