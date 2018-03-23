import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {ProjectModule} from './project/project.module';
import {TaskModule} from './task/task.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        LoginModule,
        ProjectModule,
        TaskModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
