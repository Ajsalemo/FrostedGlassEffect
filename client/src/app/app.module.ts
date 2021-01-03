import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlassComponent } from '@components/glass/glass.component';
import { AppComponent } from '@components/home/app.component';
import { NavComponent } from '@components/nav/nav.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { SpecsComponent } from './components/specs/specs.component';
@NgModule({
  declarations: [AppComponent, GlassComponent, NavComponent, SpecsComponent],
  imports: [BrowserModule, AppRoutingModule, LazyLoadImageModule, CommonModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
