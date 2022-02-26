import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DicerollelementComponent } from './dicerollelement/dicerollelement.component';

const routes: Routes = [{ path: '', component: DicerollelementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DicerollRoutingModule {}
