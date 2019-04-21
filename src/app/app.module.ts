// Components

import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

// Services

import { ImageService } from './../services/image.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent,
    ImageGalleryComponent,
    DashboardComponent,
    ImageDetailComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'image-gallery', component: ImageGalleryComponent },
    ])
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
