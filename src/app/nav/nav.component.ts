import { Component, OnInit } from '@angular/core';


declare var $:any; 



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItemArr:Array<boolean>;

  constructor() { 

    this.navItemArr = [true,false,false,false,false];
  }

  ngOnInit() {
    // $('#dv').css('border','1px solid red');
  }

  /**
   * Nav-Touch-Change-Style
   */
  public navChange(id:number) {
    this.navItemArr = this.navItemArr.map( item => item = false);
    this.navItemArr[id] = true;
  }

}
