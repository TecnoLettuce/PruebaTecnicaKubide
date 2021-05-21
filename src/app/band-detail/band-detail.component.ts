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
export class BandDetailComponent implements OnInit, Band {
  id: number;
  name: string;
  url: string;
  urlVideo: string;
  urlImagen: string;

  band: Band | undefined;

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private location: Location,
  ) {
    this.id = -1
    this.name = 'undefined'
    this.url = 'undefined'
    this.urlImagen = 'undefined'
    this.urlVideo = 'undefined'
   }

  ngOnInit(): void {
    this.id = -1
    this.name = 'undefined'
    this.url = 'undefined'
    this.urlImagen = 'undefined'
    this.urlVideo = 'undefined'
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


  public submit(): void {
    this.bandService.addBand(this.id, this.name, this.url, this.urlImagen, this.urlVideo)
    this.goBack()
  }

  public deleteBand() {
    if (this.band?.id) {
      let id = this.band?.id
      this.bandService.deleteBand(id)
    }
    this.goBack()
  }
}
