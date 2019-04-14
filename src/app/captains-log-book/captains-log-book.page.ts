import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-captains-log-book',
  templateUrl: './captains-log-book.page.html',
  styleUrls: ['./captains-log-book.page.scss'],
})
export class CaptainsLogBookPage implements OnInit {

  private entries = new Map<string, string>([
    ['Logbucheintrag 1-31', 'Zugriff verweigert. Eintrag konnte nicht von Speicher abgerufen werden.'],
    ['Logbucheintrag 32', 'Ich und die Crew haben einen neuen Auftrag erhalten. Wir bringen Eis zu den äußeren Kolonien von Aridius.' +
    'Einst war der Planet von einem gigantischen Ozean bedeckt. Als sich jedoch die Umlaufbahn veränderte und er sich dadurch den ' +
    'Zwillingssonnen des Systems näherte, trocknete der Ozean aus und wurde zu einer Wüste'],
    ['Logbucheintrag 33-61', 'Zugriff verweigert. Eintrag konnte nicht vom Speicher abgerufen werden.'],
    ['Logbucheintrag 62', 'Tag 30 des Auftrags. \n' +
    '\n' +
    'Die Crew verhält sich vorbildlich, jeder geht seiner Arbeit nach und es gab keine Zwischenfälle.'],
    ['Logbucheintrag 63', 'Wir sind noch auf dem Weg nach Aridius. ' +
    'Ich habe erfahren das mein erster Offizier eine Stelle als Kapitän auf der Ionic III bekommen wird.'],
    ['Logbucheintrag 64', 'Wir erreichen den Planeten Aridius und liefern das Eis ab, das dort als Wasserreserve gelagert wird.' +
    ' Man ist uns freundlich begegnet und wir bekamen eine Ration Seiberium für die Ganze Crew. ' +
    'Wir verließen den Planeten wieder Richtung Heimat.'],
    ['Logbucheintrag 65', 'Heimat. Was ist Heimat für uns? Ich, da ich mehr zeit in diesem Schiff verbringe als in meiner winzigen' +
    ' Wohnung in einer überfüllten Straße, weiß gar nicht mehr was mich in die Heimat zieht.'],
    ['Logbucheintrag 66', 'Wir erreichen unseren Heimatplaneten und die Crew verabschiedet sich von einem Freund , ' +
    'einem Teil unserer Familie.' +
    ' Ich habe beschlossen, dass ich nicht mehr mit einer festen Crew fliegen werde. Ich werde mir in Zukunft für ' +
    'jeden Auftrag neue Leute suchen. Frischer Wind tut immer gut...'],
    ['Logbucheintrag 67', 'Unser nächster Auftrag führt uns weit weg von unserem Sonnensystem nach Arcadia. ' +
    'Dort werden wer ein Relikt aus einem früheren Krieg wieder in das Smithsonian bringen, um daran zu erinnern dass wir ' +
    'seit Jahrhunderten nicht mehr im Krieg sind.'],
    ['Logbucheintrag 68', 'Wir sind bei den Koordinaten des Planeten Gallifrey doch er ist verschwunden. ' +
    'Weder der Planet noch irgendwelche Meteoriten sind zu sehen. Ich melde es den Behörden. Sollen die sich doch drum kümmern.'],
    ['Logbucheintrag 69', 'Meine Crew ist immer noch unruhig wegen des verschwundenen Planetens. ' +
    'Ich versuche sie zu beruhigen dies gelingt mir allerdings nur bedingt. Nach einer langen Reise sind wir in endlich ' +
    'wieder in der Heimat angekommen und die Crew beruhigt sich langsam.\n' +
    '\n' +
    'Notiz: Rick war ein Fähiger Mann ich könnte ihn öfter anheuern.'],
    ['Logbucheintrag 70', 'Ich habe einen Auftrag angenommen bei dem ich verschieden Waren von der Erde nach Kaled bringen soll.' +
    ' Es handelt sich dabei um antiken Schmuck der auf der Erde ausgestellt worden ist.\n' +
    '\n' +
    'Die Regierung hat mir noch ein weiteres Paket überreicht, dass ich dort abgeben soll.'],
    ['Logbucheintrag 71', 'Die Regierung möchte mir nicht im Voraus verraten, was in dem zusätzlichen Paket ist.' +
    ' Alles sehr mysteriös. Aber für den versprochenen Sold, nehme ich fast alles mit. Also habe ich eingewilligt.'],
    ['Logbucheintrag 72', 'Wir sind auf dem Weg nach Kaled. Wenn ich gewusst hätte, dass das Paket ein Gefangener ' +
    'ist hätte ich die Mission nicht angenommen.'],
    ['Logbucheintrag 73', 'Bin nun den ersten Tag mit den neuen Besatzungsmitgliedern unterwegs.' +
    ' Alles gute Arbeiter. Ich weiß trotzdem noch nicht, ob ich das noch lange so weiter machen möchte.'],
    ['Logbucheintrag 74', 'Der neue Navigator macht seine Sache wirklich gut, bin schon lange nicht mehr so ' +
    'geschmeidig in den Hyperraum eingetaucht.'],
    ['Logbucheintrag 75', 'Glücklicherweise hat die Regierung mir auch noch eine zusätzliche Ration an Vorräten mitgegeben,' +
    ' sonst wären uns diese auf unserer Reise vermutlich ausgegangen. Viele Notvorräte haben wir nicht an Board.'],
    ['Logbucheintrag 76', 'Wenn wir auf Kaled ankommen, könnte ich eigentlich wieder mal bei Elli vorbei schauen. ' +
    'Ich habe sie bestimmt schon 5 Jahre nicht mehr gesehen. Seit sie diesen Forschungsauftrag angenommen hat, bei dem sie sich in den' +
    ' Kalaner verliebt hat. Vielleicht kann ich in drei Tagen mal mit ihr Kontakt aufnehmen.'],
    ['Logbucheintrag 77', 'Umso länger ich drüber nachdenke, umso schlechter ist die Idee mit Elli. ' +
    'Das würde nur zu alte und tiefe Wunden aufreißen. Auf unser beider Seite.'],
    ['Logbucheintrag 78', 'Wir sind nun nur noch drei Flugtage von Kaled entfernt. ' +
    'Bald können wir die Fracht abladen. Ich bin froh, wenn wir diese los sind.']
  ]);

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {
  }


  async openLog(entry: KeyValue<string, string>) {
    const alert = await this.alertController.create({
      header: entry.key,
      message: entry.value,
      buttons: [
        {
          text: 'Schließen',
          role: 'cancel'
        }
      ]
    });

    await alert.present();

  }
}
