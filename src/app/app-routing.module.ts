import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'diceroll',
    loadChildren: () =>
      import('./diceroll/diceroll.module').then((m) => m.DicerollModule),
  },
  {
    path: 'cardsmatch',
    loadChildren: () =>
      import('./cardsmatch/cardsmatch.module').then((m) => m.CardsmatchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
