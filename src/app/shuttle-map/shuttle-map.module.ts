import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShuttleMapPage } from './shuttle-map.page';

const routes: Routes = [
  {
    path: '',
    component: ShuttleMapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShuttleMapPage]
})
export class ShuttleMapPageModule {}
