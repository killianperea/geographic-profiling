import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { reducer } from './mafia-member.reducer';
import { EffectsModule } from "@ngrx/effects";
import { MafiaMemberEffects } from "./mafia-member.effects";



@NgModule({
    imports: [
        StoreModule.forFeature('mafiaMember', reducer),
        EffectsModule.forFeature([
            MafiaMemberEffects
        ])
    ]
})

export class MafiaMemberStoreModule { }