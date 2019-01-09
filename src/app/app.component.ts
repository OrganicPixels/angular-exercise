import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './classes/base';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    locations: Restaurant;
    isOpen = false;
    allLocations = false;

    private activeSelection: Restaurant = null;
    constructor(private http: HttpClient) {
    }

    selectLocation(selection) {
        this.activeSelection = selection;
    }
    closePanel() {
        this.isOpen = false;
    }
    openPanel() {
        this.allLocations = !this.activeSelection ? true : false;
        this.isOpen = true;
    }
    togglePanel(target) {
        if (target !== this.activeSelection || this.isOpen === false) {
            this.selectLocation(target);
            this.openPanel();
        } else if ((target === this.activeSelection) && this.isOpen === true) {
            this.closePanel();
        }
    }

    ngOnInit(): void {
        this.http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json').subscribe(res => {
            this.locations = res['restaurants'];
        });
    }
}
