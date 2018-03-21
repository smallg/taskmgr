import {NgModule, Optional, SkipSelf} from '@angular/core';

import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {loadSvgResources} from '../utils/svg.util';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        HttpModule,
        BrowserAnimationsModule,
        SharedModule
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
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule, ir: MdIconRegistry, ds: DomSanitizer) {
        if (parent) {
            throw new Error('core module existed!');
        }
        loadSvgResources(ir, ds);
    }
}
