import { Component, OnInit } from '@angular/core';
import { AuthService} from './services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Video Game Lobby';
  username: String;
  password: String;
  constructor(private authService: AuthService,private router: Router) { }
  ngOnInit() {
  }
  onLoginSubmit() {
    const admin = {
      username: this.username,
      password: this.password
    }
    console.log(admin);
    this.router.navigate(['/admin']);
    /*this.authService.authenticateUser(admin).subscribe(data => {
      if(data.success) {
        console.log(data);
        this.authService.storeUserData(data.token, data.admin);
        console.log("Login works");
        this.router.navigate(['admin']);

      } else {
        console.log('login doesnt work');
        this.router.navigate(['home']);
      }
    });*/
  }
}
