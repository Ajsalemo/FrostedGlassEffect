import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
@Injectable({
  providedIn: 'root',
})
export class GetSpecificationsService {
  constructor(private httpClient: HttpClient) {}

  async getSpecifications() {
    const BASE_API_URL =
      'https://frosted-glass-api.azurewebsites.net/specifications';
    try {
      return this.httpClient
        .get(BASE_API_URL)
        .toPromise()
        .catch((err: any) => {
          this.error(err);
        });
    } catch (err: any) {
      return this.error(err);
    }
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
