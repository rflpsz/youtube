import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { YoutubeService } from 'src/app/core/youtube.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.scss']
})
export class SearchVideoComponent implements OnInit {

  public search!: string;
  public suggestions$?: Observable<any[]>;
  errorMessage?: string;

  public searchHistory: any = [];

  public videos!: any;

  constructor(
    private http: HttpClient,
    private youTubeService: YoutubeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSuggestionsSearchVideo();
  }

  onSelect(event: any) {

    const videoId = (event.item.id.videoId) ? event.item.id.videoId : event.item.id;

    // created final videoURL to navigate at the end
    let videoURL: string = "/video/" + videoId;

    // cleaning input search after searched
    this.search = '';

    // go to the selected video
    this.router.navigate([videoURL]);
  }

  getSuggestionsSearchVideo() {
    this.suggestions$ = new Observable((observer: Observer<string | undefined>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.youTubeService.searchVideoByTerm(query).pipe(
            map((data: any) => data.items || []),
            tap(() => noop, err => {
              this.errorMessage = err && err.message || 'Algo deu errado';
            })
          );
        } else {

          const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');

          return of(searchHistory);
        }

      })
    );
  }
}
