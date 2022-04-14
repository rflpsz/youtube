import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeaturedComponent } from './featured/featured.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { MoreVideosComponent } from './more-videos/more-videos.component';
import { FeaturedOtherVideosComponent } from './featured/featured-other-videos/featured-other-videos.component';


@NgModule({
  declarations: [
    HomeComponent,
    FeaturedComponent,
    AdvertisingComponent,
    MoreVideosComponent,
    FeaturedOtherVideosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
