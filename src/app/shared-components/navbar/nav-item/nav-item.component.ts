import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() navItems: any;
  @Input() loggedIn!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
