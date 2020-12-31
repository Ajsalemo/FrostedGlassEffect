import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@components/home/app.component';
import { GlassComponent } from '@components/glass/glass.component';
import { NavComponent } from '@components/nav/nav.component';
import { SpecsComponent } from './components/specs/specs.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent, GlassComponent, NavComponent, SpecsComponent],
  imports: [BrowserModule, AppRoutingModule, LazyLoadImageModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
