import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-app',
    template: `
    <div class="ui text container">
        <h1>Angular 2</h1>
        <h1>{{title}}</h1>
    
        <h2>My Heroes</h2>
        <ul class="heroes" class="ui stacked segment">
            <div class="ui middle aligned selection list" *ngFor="#hero of heroes" (click)="onSelect(hero)">
                <div class="item">
                    {{hero.id}}
                    <div class="content">
                        <div class="header">{{hero.name}}</div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        `,
    directives: [HeroDetailComponent]
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes = HEROES;
    
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
        //alert(hero);
        $('.ui.modal').modal('show');
    }
}


var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];