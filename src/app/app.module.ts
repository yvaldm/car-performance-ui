import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TrackFormComponent} from './track-form/track-form.component';
import {CarFormComponent} from './car-form/car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackFormComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
