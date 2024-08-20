import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { BlogComponent } from './blog/blog.component';
import { Blg1Component } from './blg1/blg1.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'learn',component:LearnComponent},
    {path:'competitions',component:CompetitionsComponent},
    {path:'blog',component:BlogComponent}
    
];
