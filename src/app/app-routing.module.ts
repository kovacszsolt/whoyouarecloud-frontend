import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppFinishComponent} from './finish/finish.component';
import {AppGameComponent} from './game/game.component';
import {AppShareComponent} from './share/share.component';


const routes: Routes = [
  {
    path: '',
    component: AppGameComponent,
  },
  {
    path: 'finish/:result',
    component: AppFinishComponent
  },
  {
    path: ':name/:result',
    component: AppShareComponent,
    data: {id: 3}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
