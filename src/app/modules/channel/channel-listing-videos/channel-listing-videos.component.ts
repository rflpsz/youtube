import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from 'src/app/core/youtube.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-channel-listing-videos',
  templateUrl: './channel-listing-videos.component.html',
  styleUrls: ['./channel-listing-videos.component.scss']
})
export class ChannelListingVideosComponent implements OnInit {

  public videos!: any;
  public channel: any;

  public error: any;

  constructor(
    public global: Global,
    private router: Router,
    private route: ActivatedRoute,
    private youTubeService: YoutubeService,
    private userService: UserService
  ) {
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.getVideosByChannel(param.id);
      } else {
        this.getChannelInfosByUserLogged();
      }
    });
  }

  ngOnInit(): void {
  }

  getVideosByChannel(id: string) {
    this.youTubeService.getVideosByChanel(id, 36).subscribe((response: any) => {
      if (response.items) {
        this.videos = response.items;
      }
    }, (error: any) => {
      console.log('error while searching videos by channel:', error);
    });
  }

  getChannelInfosByUserLogged() {

    this.youTubeService.getChannelInfosByUserLogged().subscribe((response: any) => {
      console.log("dados do canal: ", response);
      if (response.items) {
        console.log("response: ", response);
        this.getVideosByChannel(response.items[0].id);
      }
    }, (error: any) => {
      setTimeout(() => {
        this.error = true;
        this.router.navigate(['/home']);
      }, 1000);
    });
  }

}
