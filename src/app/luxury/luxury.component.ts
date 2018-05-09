import { Component, OnInit } from '@angular/core';
import { LuxuryService } from './luxury-service';

@Component({
  selector: 'ng-luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.css']
})
export class LuxuryComponent implements OnInit {

  luxuryItem: string;

  constructor(private luxuryService: LuxuryService) { }

  ngOnInit() {
    this.luxuryItem = this.luxuryService.getLuxuryItem();
  }

}
