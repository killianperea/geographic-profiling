import { Component, Input } from '@angular/core';
import { MafiaMemberModel } from '@models/mafia-member.model';

@Component({
  selector: 'geo-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {

  private _mafiaMembers: MafiaMemberModel[];

  public mafiaMembersCount: number;

  @Input()
  public set mafiaMembers(mafiaMembers: MafiaMemberModel[]) {
    this._mafiaMembers = mafiaMembers;
    this.mafiaMembersCount = mafiaMembers.length;
  };

  constructor() { }

  public get mafiaMembers() {
    return this._mafiaMembers;
  }

}
