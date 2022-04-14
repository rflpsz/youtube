import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/global.service';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user!: SocialUser | null;
  state = false;
  isLogged = false;

  public mainMenu: any = [
    {
      label: 'Home',
      url: '/home'
    },
    {
      label: 'Videos',
      url: '/videos'
    },
    {
      label: 'Channel',
      url: '/channel'
    }
  ];

  public rightMenu: any = [
    {
      label: 'Subscriptions',
      url: '/subscriptions'
    },
    {
      label: 'History',
      url: '/history'
    },
    {
      label: 'Upload',
      url: '/channel/upload'
    }
  ];

  constructor(
    private authService: SocialAuthService,
    private userService: UserService,
    public global: Global
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => {
      if (user) {
        this.userService.setUser(user);
        this.isLogged = (user) ? true : false;
        this.userService.authToken = user.authToken;
        this.user = user;
      }
    });
  }

  async signInWithGoogle() {
    this.user = await this.authService.signIn (GoogleLoginProvider.PROVIDER_ID);
    if (this.user) {
      this.userService.setUser(this.user);
      this.userService.authToken = this.user.authToken;
      console.log("user: ", this.user);
    }
  }

  signOut(): void {
    this.userService.setUser(null);
    this.authService.signOut();
  }

}
