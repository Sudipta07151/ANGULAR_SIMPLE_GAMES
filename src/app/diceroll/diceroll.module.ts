import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DicerollRoutingModule } from './diceroll-routing.module';
import { DicerollelementComponent } from './dicerollelement/dicerollelement.component';

@NgModule({
  declarations: [DicerollelementComponent],
  imports: [CommonModule, DicerollRoutingModule],
})
export class DicerollModule {}
