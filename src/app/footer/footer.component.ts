import { Component, OnInit, VERSION } from '@angular/core';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    angularVersion = VERSION
    appVersion = packageJson.version

    constructor() { }

    ngOnInit(): void {
    }

}
