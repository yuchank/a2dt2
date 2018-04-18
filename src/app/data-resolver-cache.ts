import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';

@Injectable()
export class DataResolverCache implements Resolve<string[]> {
  constructor(private dataService: DataService) {}
  resolve(): Observable<string[]> {
    return this.dataService.loadData();
  }
}
