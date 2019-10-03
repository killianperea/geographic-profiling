import { createAction, props } from '@ngrx/store';
import { MafiaMemberModel } from '@models/mafia-member.model';



export const getMafiaMembers = createAction(
    '[Mafia members] Get mafia members'
)

export const getMafiaMembersSuccess = createAction(
    '[Mafia members] Get mafia members success',
    props<{ mafiaMembers: MafiaMemberModel[] }>()
);

export const getMafiaMembersFailure = createAction(
    '[Mafia members] Get mafia members failure'
);
