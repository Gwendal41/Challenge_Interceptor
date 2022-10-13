import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class GetPokeService {

  constructor(private http: HttpClient) { }

  getPokemon(nbPoke:string): Observable<any[]> {
    return this.http.get<any[]>(`https://pokeapi.co/api/v2/pokemon?limit=${nbPoke}&offset=0`);
  }

  getPokemonPicture(nbPokePicture:string){
    return this.http.get<any[]>(`https://pokeapi.co/api/v2/pokemon/${nbPokePicture}/`);
  }
}
