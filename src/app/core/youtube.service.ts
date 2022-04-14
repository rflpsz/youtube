import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem, IYoutubeResponse, YoutubeResponse } from '../interfaces/youtube';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey = environment.apiKey;
  private api = environment.api;

  private mostPopularVideosSubject: BehaviorSubject<YoutubeResponse | null> = new BehaviorSubject<YoutubeResponse | null>(null);
  public mostPopularVideos$: Observable<IYoutubeResponse | null> = this.mostPopularVideosSubject.asObservable();

  constructor(
    public http: HttpClient,
    private userService: UserService
  ) { }

  setMostPopularVideos(data: IYoutubeResponse) {
    this.mostPopularVideosSubject.next(data);
  }

  getChannelInfosByUserLogged() {
    let url = `${this.api}/channels?part=snippet,contentDetails,statistics&mine=true`;
    return this.http.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userService.authToken}`
      }
    });
  }

  getVideoCategories() {
    let url = `${this.api}/videoCategories?key=${this.apiKey}&regionCode=BR&part=snippet`;
    return this.http.get(url);
  }

  uploadVideo(video: any, input: any) {
    if (!this.userService.authToken) {
      throw new Error('authentication is required');
    }
    const data = {
      snippet: {
        title: input.snippet.title,
        description: input.snippet.description,
        categoryId: input.snippet.categoryId
      },
      status: {
        privacyStatus: input.status.privacyStatus,
        embeddable: true
      }
    };
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.userService.authToken)
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('X-Upload-Content-Length', video.size + '')
      .set('X-Upload-Content-Type', 'video/*');

    const url = 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status,contentDetails';
    return this.http.post(url, data, { headers, observe: 'response', responseType: 'text' })
      .pipe(switchMap((newData: any) => {
        const newRequest = new HttpRequest("PUT", newData.headers.get('Location'), video, { reportProgress: true });
        return this.http.request(newRequest);
      }));
  }

  uploadVideoBKP(body: any) {

    let url = `${this.api}/videos?part=id,snippet,status&alt=json&uploadType=multipart&key=${this.apiKey}`;
    return this.http.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userService.authToken}`
      }
    });

  }

  getVideosByChanel(channel: any, maxResults: any): Observable<Object> {
    let url = `${this.api}/search?key=${this.apiKey}&channelId=${channel}&order=date&part=snippet&type=video,id&maxResults=${maxResults}`;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  searchVideoByTerm(term: string): Observable<IItem[]> {
    let url = `${this.api}/search?key=${this.apiKey}&q=${term}&type=video&part=snippet`;
    return this.http.get<IItem[]>(url);
  }

  // i'm making an example of management state just in this case, so i'll not implement in others methods
  getMostPopularVideos(): Observable<IYoutubeResponse | null> {
    let url = `${this.api}/videos?key=${this.apiKey}&part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=36&regionCode=BR`;

    if (this.mostPopularVideosSubject.value) {
      return this.mostPopularVideos$;
    } else {
      return this.http.get<IYoutubeResponse>(url).pipe(map(response => {
        this.setMostPopularVideos(response);
        return response;
      }));
    }
  }

  getVideoById(id: string) {
    let url = `${this.api}/videos?key=${this.apiKey}&part=snippet,contentDetails,statistics&id=${id}`;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

}
