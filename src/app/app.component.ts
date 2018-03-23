import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('square', [
            state('green', style({'background-color': 'green', 'height': '200px', 'transform': 'translateX(0)'})),
            state('red', style({'background-color': 'red', 'height': '100px', 'transform': 'translateX(100%)'})),
            transition('green=>red', animate(1000)),
            transition('red=>green', animate(1000))
        ])
    ]
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
