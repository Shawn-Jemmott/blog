import {Injectable} from '@angular/core';
import {HttpClient, HttpBackend} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostListService {
    private apiUrl = environment.apiUrl;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor( private _httpClient: HttpClient ) {}

    /**
     * Get agent
     *
     */
    getRecord() {
        return this._httpClient.get(this.apiUrl + '/posts/')
    }

}
