import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostdataComponent } from './postdata/postdata.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosdataComponent } from './components/photosdata/photosdata.component';
@NgModule({
  declarations: [
    AppComponent,
    PostdataComponent,
    PhotosdataComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
