import { LatLng } from '@agm/core';

export interface MafiaMemberModel {
    ref: string,
    name: string,
    dangerousness: number,
    photo: string,
    related_bodies_found: Array<LatLng>
}