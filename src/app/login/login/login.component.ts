import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        // this.form = new FormGroup({
        //     email: new FormControl('test@test.com', Validators.compose([Validators.required, Validators.email])),
        //     pwd: new FormControl('123', Validators.required)
        // });
        this.form = this.fb.group({
            email: ['test@test.com', Validators.compose([Validators.required, Validators.email, this.validate])],
            pwd: ['', Validators.required]
        });
    }

    onSubmit({value, valid}, ev: Event) {
        ev.stopPropagation();
        // this.form.controls['email'].setValidators(this.validate);
        console.log(JSON.stringify(value));
        console.log(valid);
    }

    validate(c: FormControl): { [key: string]: any } {
        if (!c.value) {
            return null;
        }
        const pattern = /^test+/;
        if (pattern.test(c.value)) {
            return null;
        }
        return {
            emailNotValid: 'email must start with test.'
        };
    }

}
