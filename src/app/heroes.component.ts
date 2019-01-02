import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  template: 
    `
  <h2>My Players</h2>
  <ul class="list-group heroes">
    <li *ngFor = "let hero of heroes" class="list-group-item" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
       {{hero.name}} <span class = "badge">{{hero.id}}</span> 
    </li>
  </ul>
   <hero-detail [hero]='selectedHero'></hero-detail>
  `,
  styleUrls: ['./app.component.css'],
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #FFB6C1;
      margin: .5em;
      padding: .3em 0;
      height: 2em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
   
  `],
  providers: [ HeroService ]

})

export class HeroesComponent implements OnInit{

constructor(private heroService: HeroService) { }
  heroes : Hero[];
  selectedHero : Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

ngOnInit(): void {
//this.heroService.getHeroes().then((heroes) => this.heroes = heroes);  }

this.heroService.getHeroesFromHttpCall().subscribe((heroes) => this.heroes = heroes);  }

}
