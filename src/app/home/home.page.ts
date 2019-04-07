import {Component} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private debug = true;

  private weapon_spint_code = 4326;
  private weapon_spint = false;
  private weapon_locked = false;

  constructor(private alertController: AlertController,
              private nav: NavController,
              private route: ActivatedRoute,
              private router: Router) {
    if (this.debug) {
      this.weapon_spint = true;
    }
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.weapon_locked = JSON.parse(params.special);
        console.log(this.weapon_locked);
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
    let message = 'Sie haben einen Zugang freigeschalten.';
    if (code == this.weapon_spint_code) {
      this.weapon_spint = true;
      console.log('Weapon spint is free now.');
      message = 'Sie können sich über das PDA mit dem Waffenschrank verbinden.';
    } else {
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
