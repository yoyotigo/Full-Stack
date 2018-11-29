import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PlayerService } from './player.service';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, 
MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatSnackBarModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AdminComponent } from './admin/admin.component';

//ROUTING CONFIGURATION
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},  
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'games', component: GamesComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    GamesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),   //ACTIVATE ROUTES
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule,
    MatTableModule, 
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
