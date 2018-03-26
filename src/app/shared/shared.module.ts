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
    MatSelectModule,
    MatTabsModule, MatButtonToggleModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from '../directive/directive.module';
import {ImageListSelectComponent} from './image-list-select/index';
import {AgeInputComponent} from './age-input/index';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
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
        MatTabsModule,
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
        MatButtonToggleModule,
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
        MatTabsModule,
        DirectiveModule,
        AgeInputComponent,
        ImageListSelectComponent
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    declarations: [
        ConfirmDialogComponent,
        ImageListSelectComponent,
        AgeInputComponent
    ]
})
export class SharedModule {
}
