import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SuperHero} from "./superhero-interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  url = 'https://superheroapi.com/api/';
  accessToken = '10226090872078973';

  constructor(private httpClient: HttpClient) { }

  loadSearchSuperHeroes(name:string): Observable<SuperHero> {
    return this.httpClient.get<SuperHero>(this.url+this.accessToken + '/search' + name);
  }

  loadStatsSuperHeroes(characterId:string): Observable<SuperHero> {
    return this.httpClient.get<SuperHero>(this.url+this.accessToken + '/' + characterId + '/' + 'powerstats');
  }

  getSuperHeroes() {
    this.httpClient.get (this.url+this.accessToken);
  }

/*  getSuperHeroesArray(): superHero [] {
    return this.superheroes;
  }*/
}
