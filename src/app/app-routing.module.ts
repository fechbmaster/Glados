import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'shuttle-map', loadChildren: './shuttle-map/shuttle-map.module#ShuttleMapPageModule' },
  { path: 'weapon-locker', loadChildren: './weapon-locker/weapon-locker.module#WeaponLockerPageModule', data: {locked: false} },
  { path: 'captains-log-book', loadChildren: './captains-log-book/captains-log-book.module#CaptainsLogBookPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
