import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInViewComponent } from './log-in-view/log-in-view.component';
import { RecoveryViewComponent } from './recovery-view/recovery-view.component';

const routes: Routes = [
  {path:'', component: LogInViewComponent},
  {path:'recover', component:RecoveryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LogInViewComponent, RecoveryViewComponent]
