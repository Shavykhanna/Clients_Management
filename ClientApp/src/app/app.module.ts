import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientUpdateComponent } from './client-update/client-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientUpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ClientListComponent },
      { path: 'clients', component: ClientListComponent },
      { path: 'client/add', component: ClientAddComponent },
      { path: 'client/update/:id', component: ClientUpdateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
