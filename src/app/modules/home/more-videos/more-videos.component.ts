import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/core/global.service';

@Component({
  selector: 'app-more-videos',
  templateUrl: './more-videos.component.html',
  styleUrls: ['./more-videos.component.scss']
})
export class MoreVideosComponent implements OnInit {

  @Input() moreVideos!:any;

  constructor(public global: Global) { }

  ngOnInit(): void {
  }

}
