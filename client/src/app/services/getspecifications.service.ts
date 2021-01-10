import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetSpecificationsService {
  BASE_API_URL = 'https://frosted-glass-api.azurewebsites.net/specifications';

  constructor(private httpClient: HttpClient) {}

  getSpecifications(): Observable<object> {
    return this.httpClient.get(this.BASE_API_URL);
  }
}
