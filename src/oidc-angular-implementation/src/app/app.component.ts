import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DemoApiServiceService } from './services/demo-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oidc-angular-implementation';
  isAuthenticated: boolean = false;
  userInfo: any;
  weatherData: any = [];
  weatherDataAngular: any = [];
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private demoService: DemoApiServiceService
  ) {}

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

  loadDataFromDemoApi() {
    //this should get 401 as demo_api api resource is not accessible from this angular client
    this.demoService.getWeatherFromDemoApi().subscribe(
      (response) => {
        console.log(response);
        this.weatherData = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadDataFromDemoAngularApi() {
    //this should get 401 as demo_angular_api api resource is not accessible from this angular client
    this.demoService.getWeatherFromAngularDemoApi().subscribe(
      (response) => {
        console.log(response);
        this.weatherDataAngular = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
