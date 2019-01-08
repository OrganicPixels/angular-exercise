import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQrtEK-XD6oe3PYrqQkWrCxjJhNolk-8o'
    })
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
