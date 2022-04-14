import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule)
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule)
  },
  {
    path: "video",
    loadChildren: () =>
      import("./modules/video/video.module").then((m) => m.VideoModule)
  },
  {
    path: "history",
    loadChildren: () =>
      import("./modules/history/history.module").then((m) => m.HistoryModule)
  },
  {
    path: "channel",
    loadChildren: () =>
      import("./modules/channel/channel.module").then((m) => m.ChannelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
