import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponentComponent } from './cards-component/cards-component.component';

const routes: Routes = [{ path: '', component: CardsComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsmatchRoutingModule {}
