import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Band } from './Band';
import { BANDS } from './mock-bands';

@Injectable({ providedIn: 'root' })
export class BandService {

  constructor() { }

  getBands(): Observable<Band[]> {
    const bands = of(BANDS);
    return bands;
  }

  getBand(id: number): Observable<Band> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const band = BANDS.find(b => b.id === id)!;
    return of(band);
  }
}
