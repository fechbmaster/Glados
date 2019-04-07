import {Component} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private weapon_spint_code = 4326;
  private weapon_spint = false;

  constructor(public alertController: AlertController,
              public nav: NavController) {

  }

  private async insertCode() {
    const alert = await this.alertController.create({
      header: 'Autorisierungscode',
      message: 'Geben Sie hier den Autorisierungscode ein.',
      inputs: [
        {
          name: 'Code',
          placeholder: 'code',
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Bestätigen',
          handler: data => {
            this.checkCode(data.code);
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

  private checkCode(code: number) {
    if (code === this.weapon_spint_code) {
      this.weapon_spint = true;
    }
  }

  private goToSpaceShuttleMap() {
    this.nav.navigateForward('/shuttle-map');
  }
}
