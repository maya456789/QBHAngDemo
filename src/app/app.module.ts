import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModuleModule } from './common-module/common-module.module';
import { LoginComponent } from './appPages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './appPages/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './appPages/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CreateProjectComponent } from './appPages/create-project/create-project.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListProjectComponent } from './appPages/list-project/list-project.component';
import { SharkDirective } from './viewChildDecorator/shark.directive';
import { PupComponent } from './viewChildDecorator/pup.component';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { AddClientComponent } from './appPages/add-client/add-client.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    CreateProjectComponent,
    ListProjectComponent,
    SharkDirective,
    PupComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModuleModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [MatDatepickerModule,ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
