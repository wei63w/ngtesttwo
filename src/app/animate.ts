import { Component, OnInit ,Input,trigger,state,style,transition,animate , keyframes ,group} from '@angular/core';

export const flyIn = trigger('flyIn', [//飞入
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
       animate(400, keyframes([
        style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
  ]),
  transition('* => void', [
        animate(400, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(25px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
  ])
]);

export const flyInOut = trigger('flyInOut',[//飞出
	state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 120
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
]);

export const fadeIn = trigger('fadeIn', [//淡入
  transition("void => *", [
    style({ opacity: 0 }),
    animate(600, style({ opacity: 1 }))
  ]),
  transition("* => void", [
    animate(600, style({ opacity: 0 }))
  ])
]);

export const openClose = trigger('openClose',[
        state('collapsed, void', style({height: '0px', color: 'maroon'})),
        state('expanded', style({height: '*', color: 'green'})),
        transition(
            'collapsed <=> expanded', [animate(300, style({height: '*'})), animate(300)])
      ]);

export const flyInOuttt =   trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    state('out', style({transform: 'translateX(100%)'})),
    transition('in => out', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('out => in', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ]);



//export const openClose = trigger('openClose',[
//      state('collapsed, void', style({height: '0px', color: 'maroon',display: 'none'})),
//      state('expanded', style({height: '*', color: 'green',display: 'block'})),
//      transition(
//          'collapsed <=> expanded', [animate(300, style({height: '*'})), animate(300)])
//    ]);