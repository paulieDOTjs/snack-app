import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { endpoint } from 'src/app/config/endpoint';
import { snack } from 'src/app/models/snack';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  sayHello() {
    return this.httpClient.get<{ message: string } | Error>(
      endpoint.base_url + endpoint.getHello
    );
  }

  getSnacks() {
    return this.httpClient.get<snack[]>(
      endpoint.base_url + endpoint.getAllSnacks,
      {
        headers: endpoint.headers,
      }
    );
  }

  updateSnack(id: string) {
    return this.httpClient.post<snack>(
      endpoint.base_url + endpoint.postUpdateSnackByID + id,
      { id },
      {
        headers: endpoint.headers,
      }
    );
  }
}
