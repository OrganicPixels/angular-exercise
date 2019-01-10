import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { SidePanelComponent } from './components/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQrtEK-XD6oe3PYrqQkWrCxjJhNolk-8o'
    })
  ],
  providers: [],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
