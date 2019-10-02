import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { distinctUntilChanged } from 'rxjs/operators'


const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'geo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource = ELEMENT_DATA;

  constructor(
    public mediaObserver: MediaObserver
  ) { }

  public ngOnInit() {
    this.mediaObserver.media$
      .pipe(
        distinctUntilChanged((x: MediaChange, y: MediaChange) => x.mqAlias === y.mqAlias)
      ).subscribe((media: MediaChange) => {
        this.displayedColumns = ['mafiaMember', 'dangerousness'];

        if (media.mqAlias !== 'xs') {
          this.displayedColumns = ['mafiaMember', 'dangerousness', 'bodiesFound', 'location'];
        }

      })
  }

}
