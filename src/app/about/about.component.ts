import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    form: UntypedFormGroup
    password: FormControl<string | null>
    confirmPassword: FormControl<string | null>
    percent = 0

    constructor() {
        this.password = new FormControl<string>('')
        this.confirmPassword = new FormControl<string>('')
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
