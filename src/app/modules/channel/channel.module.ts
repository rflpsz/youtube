import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelComponent } from './channel.component';
import { ChannelUploadVideoComponent } from './channel-upload-video/channel-upload-video.component';
import { ChannelListingVideosComponent } from './channel-listing-videos/channel-listing-videos.component';

@NgModule({
  declarations: [
    ChannelComponent,
    ChannelUploadVideoComponent,
    ChannelListingVideosComponent
  ],
  imports: [
    CommonModule,
    ChannelRoutingModule,
    FormsModule
  ]
})
export class ChannelModule { }
