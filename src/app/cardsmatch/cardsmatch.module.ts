import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsmatchRoutingModule } from './cardsmatch-routing.module';
import { CardsComponentComponent } from './cards-component/cards-component.component';
import { SingleCardComponent } from './single-card/single-card.component';


@NgModule({
  declarations: [
    CardsComponentComponent,
    SingleCardComponent
  ],
  imports: [
    CommonModule,
    CardsmatchRoutingModule
  ]
})
export class CardsmatchModule { }
