import { Component, OnInit } from '@angular/core';
import { LuxuryService } from '../luxury/luxury-service';

@Component({
  selector: 'ng-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(luxuryService: LuxuryService) { }

  ngOnInit() {
  }

}
