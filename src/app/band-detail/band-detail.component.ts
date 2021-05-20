import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Band } from '../Band';
import { BandService } from '../band.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: [ './band-detail.component.css' ]
})
export class BandDetailComponent implements OnInit {
  band: Band | undefined;

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBand();
  }

  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getBand(id)
      .subscribe(band => this.band = band);
  }

  goBack(): void {
    this.location.back();
  }
}
