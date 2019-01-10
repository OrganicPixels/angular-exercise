import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Restaurant} from '../../classes/base';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: [ './side-panel.component.scss'],
    animations: [
        trigger('panelState', [
            state('hide', style({
                transform: 'translateX(0)'
            })),
            state('show', style({
                transform: 'translateX(106%)'
            })),
            transition('show => hide', animate('200ms ease-in-out')),
            transition('hide => show', animate('200ms ease-in-out'))
        ])
    ]
})
export class SidePanelComponent  implements OnInit {
    @Input() details: Restaurant;
    @Input() locations: any;
    @Input() isOpen = false;
    @Input() allLocations = false;
    zoomLevel = 18;

    constructor(
    ) {}

    ngOnInit() {
    }
    clearSelections() {
        let i = 0;
        for (i  < this.locations.length; i++;) {
            this.locations[i].selected = false;
        }
    }
    updateSelection(target) {
        this.clearSelections();
        target.selected = true;
    }
}
