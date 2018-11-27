import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerCenterComponent } from './player-center/player-center.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent} from './admin-login/admin-login.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},  //empty path redirects to home
  {path: 'home', component: HomeComponent},           //home path redirects to home
  {path: 'players', component: PlayerCenterComponent}, //players path redirects to player component
  {path: 'adminLogin', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
