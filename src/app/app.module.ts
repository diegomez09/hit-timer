import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
