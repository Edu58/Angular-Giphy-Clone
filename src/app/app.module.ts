import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GifComponent } from './Components/gif/gif.component';
import { GifGridComponent } from './Components/gif-grid/gif-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GifComponent,
    GifGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
