import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/core/global.service';

@Component({
  selector: 'app-featured-other-videos',
  templateUrl: './featured-other-videos.component.html',
  styleUrls: ['./featured-other-videos.component.scss']
})
export class FeaturedOtherVideosComponent implements OnInit {

  @Input() otherVideos: any;

  constructor(public global: Global) { }

  ngOnInit(): void {
  }

}
