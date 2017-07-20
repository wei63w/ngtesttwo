import { Component, OnInit } from '@angular/core';



declare var $:any; 



@Component({
  selector: 'app-usejquery',
  templateUrl: './usejquery.component.html',
  styleUrls: ['./usejquery.component.css']
})
export class UsejqueryComponent implements OnInit {

  timer:any;

  constructor() {
    
   }

  ngOnInit() {

    this.changeStyleByJq();


  }
  ngOnDestroy(){
    console.log('page is bad');
    clearInterval(this.timer);//页面销毁清除定时器
  }

  /**
   * changeStyleByJq
   */
  public changeStyleByJq():void{
    let count = 0;
     this.timer = setInterval((interval) =>{
      count ++;
      if(count == 6){
        clearInterval(this.timer);
        console.log('timer is closed!');
        $('#jqdv').css('background-image','url(./assets/img/girl.jpg)').css('background-size','100% 100%');
      }
        let tempnum = Math.round(Math.random()*3+1);
        let tempnumtwo = Math.round(Math.random()*3+1);
        let tempcolor = ['red','blue','purple','green','yellow','black'];
        $('#jqdv').css('background-color',tempcolor[tempnum]).css('border-color',tempcolor[tempnumtwo]);

    },1000);

  }
  
  


}
