import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    selectedTab: 0;
    form: FormGroup;
    avatars$: Observable<string[]>;
    private _sub: Subscription;
    private readonly avatarName = 'avatars';

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;
        this.form = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
            repeat: ['', Validators.required],
            avatar: [img],
            dateOfBirth: [''],
            address: ['', Validators.maxLength(80)],
            identity: []
        });
    }

    onTabChange(index) {
        this.selectedTab = index;
    }

}
