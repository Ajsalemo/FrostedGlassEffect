import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@components/home/app.component';
import { GlassComponent } from '@components/glass/glass.component';
@NgModule({
  declarations: [AppComponent, GlassComponent],
  imports: [BrowserModule, AppRoutingModule, LazyLoadImageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
