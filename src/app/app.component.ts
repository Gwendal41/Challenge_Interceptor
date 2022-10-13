import { Component } from '@angular/core';
import { GetPokeService } from './shared/get-poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'challengeInterceptor';

  newPokemonNumber: string = '';
  pokemonList: any = undefined;
  pokemonImg: any = undefined;

  constructor(private getPokeS: GetPokeService ){}

  ngOnInit(): void {
    this.getPokeS.getPokemon('1').subscribe(pokemonFromApi => {
      this.pokemonList = pokemonFromApi;
      console.log(this.pokemonList);
    });

    this.getPokeS.getPokemonPicture('1').subscribe(pokemonFromApi => {
      this.pokemonImg = pokemonFromApi;
      console.log(this.pokemonImg);
    });

}

onSubmit(){
  this.getPokeS.getPokemon(this.newPokemonNumber).subscribe(pokemonFromApi => {
    this.pokemonList = pokemonFromApi;
});

  this.getPokeS.getPokemonPicture(this.newPokemonNumber).subscribe(pokemonFromApi => {
  this.pokemonImg = pokemonFromApi;
});
}


}
