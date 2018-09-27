import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { Util } from '../../Util';
import { User } from './user.model';

@Injectable()
export class LoginService {

    user : User;

    constructor( private http: HttpClient,
                 private route: Router ) {}

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    login( email: string, password: string ): Observable<User> {
        return this.http.post<User>(`${Util.url}/login`, 
                                { email: email, password: password })
                                .do( user => this.user = user );
    }

    handleLogin( path?: string ) {
        this.route.navigate( ['/login', path ] );
    }
}