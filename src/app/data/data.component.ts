import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    const someJsonData = route.snapshot.data['loadedJsonData'];
    console.log('Got the data');
  }

  ngOnInit() {
  }

}
