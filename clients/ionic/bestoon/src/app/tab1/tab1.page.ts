import { Component } from '@angular/core';
import {Events} from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  public data :any;

  constructor(public events: Events) {}
  // data:any;
  ngOnInit(): void {
    this.events.subscribe('data:created', (recdata) => {
      this.data = recdata;
      console.log( "this is tab1.page.ts");
      console.log( this.data);
      
    });
  }
  
}
