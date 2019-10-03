import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMafiaMemberReducer from './mafia-member.reducer';


export const selectMafiaMemberState = createFeatureSelector<fromMafiaMemberReducer.MafiaMemberState>('mafiaMember');

export const selectMafiaMemberEntities = createSelector(
    selectMafiaMemberState,
    fromMafiaMemberReducer.selectMafiaMemberEntities
  );

export const selectFeatureCount = createSelector(
    selectMafiaMemberEntities,
    fromMafiaMemberReducer.getSelectedMafiaMember,
    (mafiaMembersEntities, currentMafiaMember) => mafiaMembersEntities[currentMafiaMember]
);


export const selectAllMafiaMember = createSelector(
    selectMafiaMemberState,
    fromMafiaMemberReducer.selectAllMafiaMember
  );