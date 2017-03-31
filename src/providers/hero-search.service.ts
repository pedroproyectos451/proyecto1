import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from '../model/hero';

import {Usuario} from "../model/usuario";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeroSearchService {
  name: string;
  pruebas: FirebaseListObservable<any>

  public usuarios: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {

    
    this.name = `coeoeoeo`;
    this.pruebas =  this.af.database.list('usuarios', {
      
      query: {
        orderByChild: 'name',
        equalTo: `${this.name}`
      }
    });
    
    console.log("He pasado por aquí: " );

  }

  

  search(term:string): FirebaseListObservable<any> {        

      const filterSubject = new Subject(); // import {Subject} from 'rxjs/Subject';
      const queryObservable = this.af.database.list('usuarios', {
        query: {
            orderByChild: 'name',
            equalTo: term
            }
        });

        

        // trigger the query
        filterSubject.next('test@web.de');

        // re-trigger the query!!!
        filterSubject.next('huhu@gmail.com');

        return queryObservable;
    
  }
    
}
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/