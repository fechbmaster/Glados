import { Component, OnInit } from '@angular/core';
import {GladosService} from '../glados.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.page.html',
  styleUrls: ['./map-page.page.scss'],
})
export class MapPagePage implements OnInit {

  constructor(public glados: GladosService) { }

  ngOnInit() {
  }

}
