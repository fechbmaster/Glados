import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeaponLockerPage } from './weapon-locker.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponLockerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeaponLockerPage]
})
export class WeaponLockerPageModule {}
