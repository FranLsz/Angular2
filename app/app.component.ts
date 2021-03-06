import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app/templates/app.template.html', 
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit{
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes : Hero[];
    
    constructor(private _heroService: HeroService) { }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
        $('.ui.modal').modal('show');
    }
}

