import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './appPages/add-client/add-client.component';
import { CreateProjectComponent } from './appPages/create-project/create-project.component';
import { DashboardComponent } from './appPages/dashboard/dashboard.component';
import { ListProjectComponent } from './appPages/list-project/list-project.component';
import { LoginComponent } from './appPages/login/login.component';
import { SidebarComponent } from './appPages/sidebar/sidebar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'homepage',component:SidebarComponent,
  children:[
    // {path:'dashboard',component:DashboardComponent},
    {path:'create-client',component:AddClientComponent},
    {path:'create-project',component:CreateProjectComponent},
    // {path:'list-project',component:ListProjectComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
