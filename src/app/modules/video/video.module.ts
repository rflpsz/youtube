import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SafePipeModule } from 'safe-pipe';


@NgModule({
  declarations: [
    VideoComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SafePipeModule
  ]
})
export class VideoModule { }
