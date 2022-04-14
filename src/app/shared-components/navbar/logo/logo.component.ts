import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Input() class!: string;
  @Input() src!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
