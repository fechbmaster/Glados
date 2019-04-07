import {Component} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {GladosService} from '../glados.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private debug = true;

  private weapon_spint_code = 4326;
  private weapon_spint = false;

  constructor(private alertController: AlertController,
              private nav: NavController,
              private glados: GladosService) {
    if (this.debug) {
      this.weapon_spint = true;
    }

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
    let message = 'Sie haben einen Zugang freigeschalten.';
    if (code == this.weapon_spint_code) {
      this.weapon_spint = true;
      console.log('Weapon spint is free now.');
      message = 'Sie können sich über das PDA mit dem Waffenschrank verbinden.';
    } else {
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
      return;
    }

    const alert = await this.alertController.create({
      header: 'Zugang freigeschalten.',
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  private goToSpaceShuttleMap() {
    this.nav.navigateForward('/shuttle-map');
  }

  private goToWeaponLocker() {
    this.nav.navigateForward('/weapon-locker');
  }
}
