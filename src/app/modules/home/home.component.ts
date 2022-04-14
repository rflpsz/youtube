import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/core/youtube.service';
import { IItem } from 'src/app/interfaces/youtube';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private youTubeService: YoutubeService) {
    this.getMostPopularVideos();
  }

  public videos!: any;

  public featured!: IItem | undefined;
  public otherVideos!: IItem[];
  public moreVideos!: IItem[];

  ngOnInit(): void {

  }

  getMostPopularVideos() {
    this.youTubeService.getMostPopularVideos().subscribe((response) => {
      if (response) {
        this.featured = response.items[0];
        this.otherVideos = response.items.slice(1, 5);
        this.moreVideos = response.items.slice(6, response.items.length-1);
      }
    }, (error: any) => {
      console.log('error while searching:', error);
    });
  }

}
