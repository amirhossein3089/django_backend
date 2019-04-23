import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RestApiService } from '../rest-api.service';
import { LoadingController } from '@ionic/angular';
import {Events} from '@ionic/angular'


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    constructor(private httpClient:HttpClient,public api: RestApiService,public loadingController: LoadingController,public events: Events) {}

    generalStat_parameter :any;

    async generalStat() {
      const loading = await this.loadingController.create({
        message: 'Please wait...'
      });
      await loading.present();
      await this.api.postAndGet_generalStat('1234567')
        .subscribe(res => {
          console.log(res);
          this.generalStat_parameter = res;
          loading.dismiss();
          this.events.publish('data:created', this.generalStat_parameter);
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }

    ngOnInit() {
      this.generalStat();
               
    }
}

