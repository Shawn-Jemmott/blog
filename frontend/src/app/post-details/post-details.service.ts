import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostDetailService {
    private apiUrl = environment.apiUrl;

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) { }

    /**
     * Get agent
     *
     */
    getRecord(id: number) {
        return this._httpClient.get(this.apiUrl + '/posts/' + id + '/')
    }

    /**
    * Save agent
    *
    */
    saveRecord(id: number, record: any){
        return this._httpClient.patch(this.apiUrl + '/posts/' + id + '/', record)
    }

    /**
     * Add agent
     *
     */
    addRecord(record: any){
        return this._httpClient.post(this.apiUrl + '/posts/', record)
    }

    /**
     * remove agent
     */
    removeRecord(id: number){
        return this._httpClient.delete(this.apiUrl + '/posts/' + id + '/')
    }

}
