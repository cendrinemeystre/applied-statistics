import {Routes} from '@angular/router';
import {Home} from './home/home-page.component';
import {Cv} from './cv/cv';
import {Research} from './research/research';
import {Teaching} from './teaching/teaching';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'cv',
        component: Cv
      },
      {
        path: 'research',
        component: Research
      },
      {
        path: 'teaching',
        component: Teaching
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
