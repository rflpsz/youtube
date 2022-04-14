import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/core/global.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  @Input() featured: any;
  @Input() otherVideos: any;

  constructor(public global: Global) {
  }

  ngOnInit(): void {
  }

}
