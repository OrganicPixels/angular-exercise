import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './classes/base';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    locations: Restaurant[];
    activeSelection: Restaurant = null;
    isOpen = false;
    allLocations = false;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json').subscribe(res => {
            this.locations = res['restaurants'].map(rest => new Restaurant(rest));
        });
    }

    toggleFullMap() {
        this.allLocations ? this.closePanel() : this.openPanel();
        this.allLocations = !this.allLocations;
    }

    openPanel() {
        this.isOpen = true;
    }

    closePanel() {
        this.isOpen = false;
    }

    clearSelections() {
        let i = 0;
        for (i  < this.locations.length; i++;) {
            this.locations[i].selected = false;
        }
    }

    toggleLocation(target) {
        this.clearSelections();
        if (target !== this.activeSelection || !this.isOpen) {
            this.activeSelection = target;
            this.openPanel();
        } else if ((target === this.activeSelection) && this.isOpen) {
            this.closePanel();
        }
        this.allLocations = false;
        target.selected = true;
    }
}
