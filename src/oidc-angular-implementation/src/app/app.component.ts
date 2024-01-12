import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oidc-angular-implementation';
  isAuthenticated: boolean = false;
  userInfo: any;
  constructor(private oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        this.isAuthenticated = isAuthenticated;
        this.userInfo = userData;
      });
  }

  onLogin() {
    this.oidcSecurityService.authorize();
  }

  onLogout() {
    if (this.isAuthenticated) {
      this.oidcSecurityService.logoff().subscribe((result) => {
        console.log(result, 'Result');
      });
    }
  }
}
