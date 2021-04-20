import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private BASE_URL = 'https://snack-server-nerdery.herokuapp.com';

  private endPoints = {
    getHello: '/',
    getAllSnacks: '/snacks',
    postUpdateSnackByID: '/snacks/vote/',
  };

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827`,
  });

  constructor(private httpClient: HttpClient) {}

  sayHello() {
    return this.httpClient.get(this.BASE_URL + this.endPoints.getHello);
  }

  getSnacks() {
    return this.httpClient.get(this.BASE_URL + this.endPoints.getAllSnacks, {
      headers: this.headers,
    });
  }

  updateSnack(id: number) {
    return this.httpClient.get(
      this.BASE_URL + this.endPoints.postUpdateSnackByID + id,
      {
        headers: this.headers,
      }
    );
  }
}
