import 'rxjs/add/operator/merge';
import { Component } from '@angular/core';

// import * as $ from 'jquery';
declare var $:any; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is public page';
}
