import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { RouterModule } from "@angular/router";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ModalModule } from "ngx-bootstrap/modal";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { FormsModule } from "@angular/forms";
import { LogoComponent } from './navbar/logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { SearchVideoComponent } from './navbar/search-video/search-video.component';
import { OffsetMenuComponent } from './navbar/offset-menu/offset-menu.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';

const components = [
  LogoComponent,
  NavbarComponent,
  SearchVideoComponent,
  OffsetMenuComponent,
  NavItemComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    NgSelectModule,
    RouterModule,
    FormsModule,
    TooltipModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    ...components,
    NgxSkeletonLoaderModule
  ],
})
export class SharedComponentsModule { }
