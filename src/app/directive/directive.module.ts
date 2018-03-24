import {NgModule} from '@angular/core';
import {DragDirective} from './drap-drop/drag.directive';
import {DropDirective} from './drap-drop/drop.directive';

@NgModule({
    imports: [],
    exports: [
        DragDirective,
        DropDirective
    ],
    declarations: [DragDirective, DropDirective]
})
export class DirectiveModule {
}
