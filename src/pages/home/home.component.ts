import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MafiaMemberState } from '@stores/mafia-member/mafia-member.reducer';
import { Observable } from 'rxjs';
import { MafiaMemberModel } from '@models/mafia-member.model';
import * as fromMafiaMemberSelector from '@stores/mafia-member/mafia-member.selectors';

@Component({
  selector: 'geo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public mafiaMembers$: Observable<MafiaMemberModel[]>
  
  constructor(
    private store: Store<MafiaMemberState>
  ) { }

  public ngOnInit() {
    this.mafiaMembers$ = this.store.pipe(select(fromMafiaMemberSelector.selectAllMafiaMember));
  }
}
