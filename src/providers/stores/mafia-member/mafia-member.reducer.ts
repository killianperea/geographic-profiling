import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { MafiaMemberModel } from 'core/models/mafia-member.model';
import { createReducer, on, Action } from '@ngrx/store';

import * as MafiaMembersActions from './mafia-member.actions';

export interface MafiaMemberState extends EntityState<MafiaMemberModel> {
    currentMemberRef: string
}

export const mafiaMemberAdapter = createEntityAdapter<MafiaMemberModel>({
    selectId: (mafiaMember: MafiaMemberModel) => mafiaMember.ref
});

const mafiaMemberInitialState: MafiaMemberState = mafiaMemberAdapter.getInitialState({
    currentMemberRef: null
});

export const mafiaMemberReducer = createReducer(
    mafiaMemberInitialState,
    on(MafiaMembersActions.getMafiaMembersSuccess, (state, { mafiaMembers }) => {
        return mafiaMemberAdapter.upsertMany(mafiaMembers, { ...state, currentMemberRef: mafiaMembers[0].ref })
    }),
    on(MafiaMembersActions.getMafiaMembersFailure, (state) => {
        return state;
    }),
    on(MafiaMembersActions.changeCurrentMafiaMember, (state, { mafiaMemberRef }) => {
        return { ...state, currentMemberRef: mafiaMemberRef };
    })
);


export function reducer(state: MafiaMemberState | undefined, action: Action) {
    return mafiaMemberReducer(state, action)
}

export const getSelectedMafiaMember = (state: MafiaMemberState) => state.currentMemberRef;

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = mafiaMemberAdapter.getSelectors();

// select the array of user ids
export const selectMafiaMemberIds = selectIds;

// select the dictionary of user entities
export const selectMafiaMemberEntities = selectEntities;

// select the array of users
export const selectAllMafiaMember = selectAll;

// select the total user count
export const selectMafiaMemberTotal = selectTotal;