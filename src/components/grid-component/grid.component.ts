import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { distinctUntilChanged } from 'rxjs/operators'
import { MafiaMemberModel } from '@models/mafia-member.model';
import { Subscription } from 'rxjs';

import { MafiaMemberState } from '@stores/mafia-member/mafia-member.reducer';
import { Store, select } from '@ngrx/store';
import * as fromMafiaMemberSelector from '@stores/mafia-member/mafia-member.selectors';
import * as fromMafiaMemberActions from '@stores/mafia-member/mafia-member.actions';

@Component({
  selector: 'geo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {

  private _mafiaMembers: MafiaMemberModel[];

  @Input()
  public set mafiaMembers(mafiaMembers: MafiaMemberModel[]) {
    this._mafiaMembers = mafiaMembers;
    this.dataSource = mafiaMembers;
  };

  public displayedColumns: string[];

  public dataSource: MafiaMemberModel[];

  public selectedRowIndex: string;

  private media$: Subscription;

  private currentMafiaMember$: Subscription;

  constructor(
    public mediaObserver: MediaObserver,
    public store: Store<MafiaMemberState>
  ) { }

  public ngOnInit() {
    this.media$ = this.mediaObserver.media$
      .pipe(
        distinctUntilChanged((x: MediaChange, y: MediaChange) => x.mqAlias === y.mqAlias)
      ).subscribe((media: MediaChange) => {
        this.displayedColumns = ['mafiaMember', 'dangerousness'];

        if (media.mqAlias !== 'xs') {
          this.displayedColumns = ['mafiaMember', 'dangerousness', 'bodiesFound', 'location'];
        }
      });

    this.currentMafiaMember$ = this.store.pipe(select(fromMafiaMemberSelector.selectCurrentMafiaMember)).subscribe((mafiaMember) => {
      this.selectedRowIndex = mafiaMember ? mafiaMember.ref : undefined;
    });
  }

  public ngOnDestroy() {
    this.media$.unsubscribe();
    this.currentMafiaMember$.unsubscribe();
  }

  public get mafiaMembers() {
    return this._mafiaMembers;
  }

  public onClickRow(row) {
    this.store.dispatch(fromMafiaMemberActions.changeCurrentMafiaMember({ mafiaMemberRef: row.ref }));
  }

}
