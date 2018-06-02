import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Input } from '@angular/core/src/metadata/directives';
import { Observable } from 'rxjs/Observable';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController, private bluetoothSerial: BluetoothSerial) {}

  meassureArr : any = [];


  //object : any = [];  
  nameDescription : string;
  distance: string;
  //value : string = "11m";

  doPrompt() 
  {
    this.bluetoothSerial.write('hello world');
    let prompt = this.alertCtrl.create({
      title: "11m",
      message: "Beschreibung:",
      inputs: [
        {
          name: 'Beschreibung',
          placeholder: 'Abstandsmessung'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            var meassure = {
              nameDescription: data.Beschreibung,
              distance: "11m"
            }
            this.meassureArr.push(meassure);
            console.log(this.meassureArr);
          }
        }
      ]   
    });   
    prompt.present();
  }
}
