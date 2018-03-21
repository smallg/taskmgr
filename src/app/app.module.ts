import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {MdButtonModule, MdIconModule, MdSidenavModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        MdSidenavModule,
        MdIconModule,
        MdButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
