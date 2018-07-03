import { Injectable } from '@angular/core';
import {HEROES} from './model/mock-heroes';
import {Hero} from './model/hero';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
