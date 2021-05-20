import { Component, OnInit } from '@angular/core';
import { Band } from '../Band';
import { BandService } from '../band.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  bands: Band[] = [];

  constructor(private bandService: BandService) { }

  ngOnInit() {
    this.getBands();
  }

  getBands(): void {
    this.bandService.getBands()
      .subscribe(bands => this.bands = bands.slice(1, 5));
  }
}
