import {Component,
    OnInit,
    ElementRef,
    Input} from '@angular/core';
import { TweenMax, Power3 } from 'gsap';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent  implements OnInit{
    @Input() details: object;
    public content: any;
    public activeTarget = '';
    public isOpen = false;
    constructor(
        private element: ElementRef
    ) {}

    ngOnInit() {
        this.content = this.element.nativeElement.querySelector('#side-panel');
        TweenMax.set(this.content, {x: "106%"});
    }

    sidePanelClose() { //forces side panel closed.
        TweenMax.to(this.content, .6, {x: "106%", ease: Power3.easeInOut});
        this.isOpen = false;
        setTimeout(() => {
            this.activeTarget = '';
        }, 600);
    }

    sidePanelOpen(target: string) { //forces side panel open.
        TweenMax.set(this.content, {x: "0%"});
        TweenMax.from(this.content, .6, {x: "106%", ease: Power3.easeInOut});
        //TweenMax.staggerFrom(this.sidePanelContent, .4, {opacity: 0, x: 100}, 0.1);
        this.activeTarget = target;
        this.isOpen = true;
    }

    sidePanelToggle(target: string) {
        if (this.isOpen) {
            if (this.activeTarget !== target) {
                // already open, but content was changed, so leave it open
                return;
            }
            this.sidePanelClose();
        } else {
            this.sidePanelOpen(target);
        }
    }
}
