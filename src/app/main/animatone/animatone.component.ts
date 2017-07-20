import { Component, OnInit } from '@angular/core';

import { flyIn,fadeIn } from '../../animate';


@Component({
  selector: 'app-animatone',
  templateUrl: './animatone.component.html',
  styleUrls: ['./animatone.component.css'],
  animations:[ fadeIn ]
})
export class AnimatoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
