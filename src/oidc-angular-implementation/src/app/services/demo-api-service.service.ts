import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoApiServiceService {
  constructor(private httpClient: HttpClient) {}

  getWeatherFromDemoApi(): Observable<any> {
    return this.httpClient.get('https://localhost:44389/weatherforecast');
  }

  getWeatherFromAngularDemoApi(): Observable<any> {
    return this.httpClient.get('https://localhost:7178/weatherforecast');
  }
}
