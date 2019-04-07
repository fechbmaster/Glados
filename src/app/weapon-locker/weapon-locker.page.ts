import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {NavigationExtras} from '@angular/router';
import {GladosService} from '../glados.service';

@Component({
  selector: 'app-weapon-locker',
  templateUrl: './weapon-locker.page.html',
  styleUrls: ['./weapon-locker.page.scss'],
})
export class WeaponLockerPage implements OnInit {

  private showInfo = false;
  private spintCode = '042';
  private trys = 2;
  private triedTimes = 0;

  constructor(public alertController: AlertController,
              public loadingController: LoadingController,
              public nav: NavController,
              public glados: GladosService) {
  }

  async ngOnInit() {
    const alert = await this.alertController.create({
      header: 'Fehlfunktion.',
      message: 'Der Waffenschrank reagiert nicht richtig. Überbrückung wird eingeleitet...',
      buttons: [
        {
          text: 'Überbrückung einleiten',
          role: 'cancel',
          handler: async () => {
            await this.presentLoading();
          }
        }
      ]
    });

    await alert.present();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Überbrücke Waffenschrank...',
      duration: 5000
    });
    await loading.present();

    loading.onDidDismiss().then(() => {
      this.presentAlert();
    });

    console.log('Loading dismissed!');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Überbrückung fehlgeschlagen.',
      message: 'Der Waffenschrank konnte nicht überbrückt werden. Folgende Informationen konnten ausgelesen werden...',
      buttons: [
        {
          text: 'Informationen anzeigen.',
          role: 'cancel',
          handler: () => {
            this.showInfo = true;
          }
        }
      ]
    });

    await alert.present();
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
    if (code == parseInt(this.spintCode, 10)) {
      this.haveANiceDay();
      console.log('Weapon spint is free now.');
    } else {
      this.triedTimes++;
      const failMessage = this.trys - this.triedTimes + ' Versuche verbleibend.';
      const alert = await this.alertController.create({
        header: 'Code fehlerhaft.',
        message: failMessage,
        buttons: [
          {
            text: 'Verlassen.',
            role: 'cancel',
            handler: async () => {
              if (this.triedTimes == this.trys) {
                this.glados.weapon_spint_locked = true;
                await this.nav.navigateBack('/home');
              }
            }
          }
        ]
      });

      await alert.present();
    }
  }

  private async haveANiceDay() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        lcoked: true
      }
    };

    const alert = await this.alertController.create({
      header: 'Zugang gewährt.',
      message: 'Zugang zum Waffeschrank gewährt. Die Ionic III wünscht Ihnen noch einen schönen Tag!',
      buttons: [
        {
          text: 'Verlassen.',
          role: 'cancel',
          handler: async () => {
            this.glados.weapon_spint_locked = true;
            await this.nav.navigateBack('/home');
          }
        }
      ]
    });

    await alert.present();
  }
}
