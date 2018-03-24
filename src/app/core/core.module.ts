import {NgModule, Optional, SkipSelf} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {loadSvgResources} from '../utils/svg.util';
import {HttpClientModule} from '@angular/common/http';

import 'hammerjs';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AppRoutingModule
    ],
    providers: [
        {provide: 'BASE_CONFIG', useValue: 'http://localhost:3000'}
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule, ir: MatIconRegistry, ds: DomSanitizer) {
        if (parent) {
            throw new Error('core module existed!');
        }
        loadSvgResources(ir, ds);
    }
}
