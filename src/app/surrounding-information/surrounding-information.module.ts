import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurroundingInformationPage } from './surrounding-information.page';

const routes: Routes = [
  {
    path: '',
    component: SurroundingInformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurroundingInformationPage]
})
export class SurroundingInformationPageModule {}
