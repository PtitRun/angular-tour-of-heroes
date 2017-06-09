import { Component } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = "Tour of Heroes";
  heroes: Hero[];
  currentHero: Hero;

  getHeroes(){
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService){

  }

  onSelect(hero: Hero): void{
    this.currentHero = hero;
  }

}
