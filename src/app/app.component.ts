import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {trigger, state, transition, style, animate, keyframes} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('square', [
            state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateY(-100%)'})),
            state('red', style({'background-color': 'red', 'height': '100px', 'transform': 'translateY(100%)'})),
            transition('green=>red', animate('.8s cubic-bezier(0,.8,.04,.32)')),
            // transition('red=>green', animate('.8s cubic-bezier(0,.8,.04,.32)'))
            transition('red=>green', animate(5000, keyframes([
                style({transform: 'translateY(100%)'}),
                style({transform: 'translateY(98%)'}),
                style({transform: 'translateY(95%)'}),
                style({transform: 'translateY(90%)'}),
                style({transform: 'translateY(80%)'}),
                style({transform: 'translateY(50%)'}),
                style({transform: 'translateY(20%)'}),
                style({transform: 'translateY(-10%)'}),
                style({transform: 'translateY(-5%)'}),
                style({transform: 'translateY(-2%)'}),
                style({transform: 'translateY(0%)'}),
                style({transform: 'translateY(20%)'}),
                style({transform: 'translateY(-10%)'}),
                style({transform: 'translateY(-40%)'}),
                style({transform: 'translateY(-40%)'}),
                style({transform: 'translateY(-40%)'}),
                style({transform: 'translateY(100%)'})
            ])))
        ])
    ]
    // http://cubic-bezier.com/
})
export class AppComponent {

    darkTheme = false;
    squareState: string;

    constructor(private oc: OverlayContainer) {

    }

    onClick() {
        this.squareState = this.squareState === 'red' ? 'green' : 'red';
    }

    switchTheme(dark) {
        this.darkTheme = dark.checked;
        this.oc.getContainerElement().classList.add(dark.checked ? 'myapp-dark-theme' : null);
    }
}
