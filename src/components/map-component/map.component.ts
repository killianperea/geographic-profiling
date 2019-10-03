import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { MafiaMemberState } from '@stores/mafia-member/mafia-member.reducer';
import { Subscription } from 'rxjs';
import * as fromMafiaMemberSelector from '@stores/mafia-member/mafia-member.selectors';
import { MafiaMemberModel } from '@models/mafia-member.model';
import { LatLngLiteral } from '@agm/core';

@Component({
  selector: 'geo-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  public currentMafiaMember: MafiaMemberModel;

  public poiCenter: LatLngLiteral;

  public mapCenter: LatLngLiteral;

  private currentMafiaMember$: Subscription;


  constructor(
    private store: Store<MafiaMemberState>
  ) { }

  public ngOnInit() {
    this.currentMafiaMember$ = this.store.pipe(select(fromMafiaMemberSelector.selectCurrentMafiaMember)).subscribe((mafiaMember) => {
      this.currentMafiaMember = mafiaMember;
      if (this.currentMafiaMember && this.currentMafiaMember.related_bodies_found) {

        const minLat = this.getMinCoord('lat');
        const minLng = this.getMinCoord('lng');

        const maxLat = this.getMaxCoord('lat');
        const maxLng = this.getMaxCoord('lng');

        this.poiCenter = {
          lat: this.calculateCenter(minLat, maxLat),
          lng: this.calculateCenter(minLng, maxLng)
        }

        this.mapCenter = {
          lat: this.calculateCenter(minLat, maxLat),
          lng: this.calculateCenter(minLng, maxLng)
        }
      }
    });
  }

  public ngOnDestroy() {
    this.currentMafiaMember$.unsubscribe();
  }

  private getMinCoord(coord: string) {
    return this.currentMafiaMember.related_bodies_found.reduce(
      (min, p) => p[coord] < min ? p[coord] : min, this.currentMafiaMember.related_bodies_found[0][coord]);
  }

  private getMaxCoord(coord: string) {
    return this.currentMafiaMember.related_bodies_found.reduce(
      (max, p) => p[coord] > max ? p[coord] : max, this.currentMafiaMember.related_bodies_found[0][coord]);
  }

  private calculateCenter(min, max) {
    return min + ((max - min) / 2)
  }
}
