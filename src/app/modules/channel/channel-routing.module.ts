import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelListingVideosComponent } from './channel-listing-videos/channel-listing-videos.component';
import { ChannelUploadVideoComponent } from './channel-upload-video/channel-upload-video.component';
import { ChannelComponent } from './channel.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelComponent,
    children: [
      { path: "", component: ChannelListingVideosComponent },
      { path: "upload", component: ChannelUploadVideoComponent }
    ]
  },
  {
    path: ":id",
    component: ChannelListingVideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
