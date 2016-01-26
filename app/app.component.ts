import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

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
    <div *ngIf="selectedHero" class="ui modal">
        <div class="header">{{selectedHero.name}} details!</div>
        <div class="content">
            <div class="ui tag label">ID {{selectedHero.id}}</div><br><br>
            <div class="ui labeled input">
                <div class="ui label">Name</div>
                <input [(ngModel)]="selectedHero.name" placeholder="name">
            </div>
        </div>
    </div>
        `
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes = HEROES;
    
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
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