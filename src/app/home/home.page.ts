import {Component} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {GladosService} from '../glados.service';
import {Code} from '../models/Code';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private debug = true;
  private codes: Map<string, Code>;

  private defaultMapCode = 2468;
  private scienceMapCode = 2349;
  private shuttleMapCode = 2854;
  private completeMapCode = 2000;

  private codeAttributes = new Map<string, [string, string]>([
    ['shuttle-map', ['Karte des Space-Shuttles "Ionic III"', '../../assets/img/space_shuttle_map.png']],
    ['weapon-locker', ['Auf Waffenschrank zugreifen', '../../assets/img/weapon-locker.png']],
    ['captains-log-book', ['Logbuch des Captains', '']],
    ['planet-information', ['Notiz des Captains: Informationen über den Planeten ', '']],
    ['surrounding-information', ['Ergebnisse des Umgebungsscanners ', '../../assets/img/scanner-result.png']],
    ['science-map', ['Karte der Forschungsstation', '../../assets/img/scanner.png']],
    ['science-log', ['Technischer Eintrag (Verfasser unbekannt)', '']],
    ['map-page', ['Karte des Planeten', '../../assets/img/map_default.png']]
  ]);

  constructor(private alertController: AlertController,
              private nav: NavController,
              private glados: GladosService) {
    this.codes = glados.codes;
    if (this.debug) {
      this.codes.forEach((value: Code) => {
        value.unlocked = true;
      });
    }
    this.extendCodesWithAttributes();

  }

  private extendCodesWithAttributes() {
    this.codes.forEach((value: Code, key: string) => {
      const attributes: [string, string] = this.codeAttributes.get(key);
      if (attributes) {
        value.label = attributes[0];
        if (attributes[1] != '') {
          value.imageUrl = attributes[1];
        }
      }
    });
  }

  private async insertCode() {
    const alert = await this.alertController.create({
      header: 'Autorisierungscode',
      message: 'Geben Sie hier den Autorisierungscode ein.',
      inputs: [
        {
          name: 'Code',
          placeholder: 'code',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Bestätigen',
          handler: data => {
            this.checkCode(data.Code);
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  private async checkCode(code: number) {
    console.log('Entered code: ', code);
    this.codes.forEach(async (value: Code) => {
      if (code == value.code) {
        console.log('Locked free: ', value);
        value.unlocked = true;
        const alert = await this.alertController.create({
          header: 'Zugang freigeschaltet.',
          message: value.message,
          buttons: [
            {
              text: 'OK',
              role: 'cancel'
            }
          ]
        });
        await alert.present();
        return;
      }
    });
    if (code == this.defaultMapCode) {
      this.glados.setDefaultMap();
      await this.showMapChangedAlert();
      return;
    }
    if (code == this.scienceMapCode) {
      this.glados.setScienceMap();
      await this.showMapChangedAlert();
      return;
    }
    if (code == this.shuttleMapCode) {
      this.glados.setShuttleMap();
      await this.showMapChangedAlert();
      return;
    }
    if (code == this.completeMapCode) {
      this.glados.setCompleteMap();
      await this.showMapChangedAlert();
      return;
    }
    const failAlert = await this.alertController.create({
      header: 'Code nicht erkannt.',
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });

    await failAlert.present();
  }

  private async showMapChangedAlert() {
    const alert = await this.alertController.create({
      header: 'Karte aktualisiert.',
      message: 'Die Karte wurde aktualisiert.',
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  private goToPage(code: Code) {
    this.nav.navigateForward(code.url);
  }
}
