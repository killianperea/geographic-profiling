import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';


import * as MafiaMemberActions from './mafia-member.actions';
import { MafiaMemberApiService } from 'providers/api/mafia-members-api.service';

@Injectable({ providedIn: 'root' })
export class MafiaMemberEffects {

    constructor(
        private actions$: Actions,
        private mafiaMemberApiService: MafiaMemberApiService
    ) { }

    public getMafiaMembers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MafiaMemberActions.getMafiaMembers),
            exhaustMap(action => {
                return this.mafiaMemberApiService.getMafiaMembers().pipe(
                    map((mafiaMembersFromService) => {
                        const mafiaMembers = mafiaMembersFromService.sort((a, b) => b.dangerousness - a.dangerousness);
                        return MafiaMemberActions.getMafiaMembersSuccess({ mafiaMembers })
                    }),
                    catchError(() => of(MafiaMemberActions.getMafiaMembersFailure()))
                )
            })
        )
    );


}