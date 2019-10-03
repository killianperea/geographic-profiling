import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MafiaMemberState } from '@stores/mafia-member/mafia-member.reducer';
import * as fromMafiaMemberActions from '@stores/mafia-member/mafia-member.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<MafiaMemberState>
  ) { }

  public ngOnInit() {
    this.store.dispatch(fromMafiaMemberActions.getMafiaMembers());
  }
}
