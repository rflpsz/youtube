import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from 'src/app/core/youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public id!: string;
  public video!: any;
  public searchHistory: any;
  public search!: string;

  constructor(
    private youTubeService: YoutubeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.getVideoById(param.id);
      }
    });
  }

  ngOnInit(): void {
  }

  getVideoById(id: string) {
    this.youTubeService.getVideoById(id).subscribe((response: any) => {
      if (response.items[0].id) {
        response.urlFinal = 'https://www.youtube.com/embed/' + response.items[0].id + '?autoplay=1&rel=1&modestbranding=1';
        this.video = response;
        this.onSelect(response.items[0]);
      }
    }, (error: any) => {
      console.log('error while searching:', error);
    });
  }

  // check if exists specific obj into arr of objs
  videoExists(id: string, searchHistory: any) {
    return searchHistory.some(function (el: any) {
      return el.id == id;
    });
  }

  removeItemFromSearchHistory(id: string, searchHistory: any) {
    return searchHistory.filter((obj: any) => {
      return obj.id !== id;
    })
  }

  // behaviorSubject
  onSelect(event: any) {

    // get searchHistory (if exist) from localStorage
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');

    if (Object.keys(this.searchHistory).length === 0) {
      this.searchHistory.unshift(event);
    } else {

      // before add, needs to check if just have the item
      if (this.videoExists(event.id, this.searchHistory) === true) {

        // remove the specific item
        this.searchHistory = this.removeItemFromSearchHistory(event.id, this.searchHistory);

        // fixing if array has problems when empty
        this.searchHistory = (this.searchHistory == undefined) ? [] : this.searchHistory;

        // and add again to the top of list
        this.searchHistory.unshift(event);

      } else {
        //add item inside array searchHistory on top of list
        this.searchHistory.unshift(event);
      }
    }

    // fixing if array has problems when empty
    this.searchHistory = (this.searchHistory == undefined) ? [] : this.searchHistory;

    // store new item into localStorage searchHistory
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

}
