import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectLaunchpadComponent } from './components/project-launchpad/project-launchpad.component';

const routes: Routes = [
  {
    path:'get-started',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'project-launchpad',
    component:ProjectLaunchpadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
