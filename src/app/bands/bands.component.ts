import { Component, OnInit } from '@angular/core';

import { Band } from '../Band';
import { BandService } from '../band.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  bands: Band[] = [];

  constructor(private bandService: BandService) { }

  ngOnInit() {
    this.getBands();
  }

  getBands(): void {
    this.bandService.getBands()
    .subscribe(bands => this.bands = bands);
  }
}
