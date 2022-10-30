import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'password-about',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

    form: UntypedFormGroup
    password: FormControl<string>
    confirmPassword: FormControl<string>
    percent = 0

    constructor() {
        this.password = new FormControl<string>('', { nonNullable: true })
        this.confirmPassword = new FormControl<string>('', { nonNullable: true })
        this.form = new UntypedFormGroup(
            {
                password: this.password,
                confirmPassword: this.confirmPassword
            }
        )
    }

    ngOnInit(): void {
        combineLatest([this.password.valueChanges, this.confirmPassword.valueChanges]).subscribe(
            (val) => console.log(val)
        )
    }

}
