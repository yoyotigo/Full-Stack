import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PlayersService } from './players.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { GamesComponent } from './components/games/games.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes=[
  {path: 'home',  component: HomeComponent},
  {path: 'index', component: IndexComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'games', component: GamesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    AdminComponent,
    GamesComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
