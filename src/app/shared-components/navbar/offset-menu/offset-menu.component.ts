import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Global } from "../../../core/global.service";

@Component({
  selector: 'app-offset-menu',
  templateUrl: './offset-menu.component.html',
  styleUrls: ['./offset-menu.component.scss']
})
export class OffsetMenuComponent implements OnInit {

  public loading: boolean = false;

  // public categories!: Category[];
  // public subcategories!: Category[];
  // public producttypes!: Category[];

  public category!: string;
  public subCategory!: string;
  public filter!: string;

  public productTree!: any;

  constructor(
    public global: Global,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.getCategories();
  }

  // getCategories(): void {
  //   this.filter = 'category';
  //   this.loading = true;
  //   this.invoker.entityName = `products/categories`;
  //   this.invoker.getResources().subscribe((response: any) => {
  //     this.categories = response;
  //     this.loading = false;
  //   });
  // }

}
