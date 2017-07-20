import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent  } from '../main/main.component';
import { AnimatoneComponent  } from '../main/animatone/animatone.component';
import { UsejqueryComponent  } from '../main/usejquery/usejquery.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',  component: MainComponent ,
    children:[
      {path : 'animate' ,component: AnimatoneComponent},
      {path : 'jquery' ,component: UsejqueryComponent}
    ]  
  }, 
    
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];



@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
