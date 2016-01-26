import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero" class="ui modal">
        <div class="header">{{hero.name}} details!</div>
        <div class="content">
            <div class="ui tag label">ID {{hero.id}}</div><br><br>
            <div class="ui labeled input">
                <div class="ui label">Name</div>
                <input [(ngModel)]="hero.name" placeholder="Name">
            </div>
        </div>
    </div>
    `,
    inputs: ['hero']
})

export class HeroDetailComponent {
    public hero: Hero;
}