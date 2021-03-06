import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as AppComponents from './components';
import * as AppServices from './services';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents.GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AppServices.GameLogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
