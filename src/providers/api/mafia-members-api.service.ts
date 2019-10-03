import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@env'
import { Observable } from 'rxjs';
import { MafiaMemberModel } from 'core/models/mafia-member.model';
import { share } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class MafiaMemberApiService {
    constructor(
        private httpClient: HttpClient
    ) { }

    public getMafiaMembers(): Observable<MafiaMemberModel[]> {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.httpClient.get<MafiaMemberModel[]>(
            `${environment.liquidBaseUrl}${environment.endpoints.mafiaMembers}`,
            {
                headers
            }
        ).pipe(share());
    }
}
