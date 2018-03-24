import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from "../directive/directive.module";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        DirectiveModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        DirectiveModule
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    declarations: [ConfirmDialogComponent]
})
export class SharedModule {
}
