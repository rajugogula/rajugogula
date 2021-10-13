import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard.component';
import { Booktable } from './components/booktable/booktable.component';
import { Reserve } from './reserve/reserve.component';
import { History } from './history/history.component';

const routes: Routes = [
  {path: '', component: Booktable },
  {path: 'dashboard', component: Dashboard},
  {path: 'history', component: History },
  {path: 'reserve', component: Reserve }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
