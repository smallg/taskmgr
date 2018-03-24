import {Component, Inject} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    darkTheme = false;

    constructor(private oc: OverlayContainer, @Inject('BASE_CONFIG') config) {
        console.log(config);
    }

    switchTheme(dark) {
        this.darkTheme = dark.checked;
        this.oc.getContainerElement().classList.add(dark.checked ? 'myapp-dark-theme' : null);
    }
}
