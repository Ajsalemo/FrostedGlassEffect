import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlassComponent } from '@components/glass/glass.component';
import { AppComponent } from '@components/home/app.component';
import { NavComponent } from '@components/nav/nav.component';
import { SpecsComponent } from '@components/specs/specs.component';
import { GetSpecificationsService } from '@services/getspecifications.service.ts';
import { GlobalHttpInterceptorService } from '@services/globalhttpinterceptor.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [AppComponent, GlassComponent, NavComponent, SpecsComponent, LoadingIndicatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    GetSpecificationsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
