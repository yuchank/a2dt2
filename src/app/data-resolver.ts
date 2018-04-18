import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataResolver implements Resolve<string[]> {
  constructor(private httpClient: HttpClient) {}
  resolve(): Observable<string[]> {
    return this.httpClient.get<string[]>('./assets/10MB_DATA.json');
  }
}
