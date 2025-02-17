import { Routes } from '@angular/router';
import { PrimeiroComponent } from './_components/primeiro-campo/home.component';
import { SegundoComponent } from './_components/segundo-campo/products.component';
import { Card1Component } from './_components/card1/card1.component';
import { Card2Component } from './_components/card2/card2.component';
import { Card3Component } from './_components/card3/card3.component';
import { Card4Component } from './_components/card4/card4.component';
import { Card5Component } from './_components/card5/card5.component';


export const routes: Routes = [
  { path: '', component: PrimeiroComponent },
  { path: 'products', component: SegundoComponent },
  { path: 'card1', component: Card1Component },
  { path: 'card2', component: Card2Component },
  { path: 'card3', component: Card3Component },
  { path: 'card4', component: Card4Component },
  { path: 'card5', component: Card5Component },
];
