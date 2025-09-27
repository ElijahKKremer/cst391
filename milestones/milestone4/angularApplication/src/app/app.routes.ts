import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListEstateComponent } from './estates/list-estate/list-estate.component';
import { CreateEstateComponent } from './estates/create-estate/create-estate.component';
import { EditEstateComponent } from './estates/edit-estate/edit-estate.component';
import { ListOwnerEstatesComponent } from './estates/list-owner-estates/list-owner-estates.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'estates', component: ListEstateComponent },
  { path: 'estates/create/:id', component: CreateEstateComponent },
  { path: 'estates/edit/:id', component: EditEstateComponent },
  { path: 'estates/owner/:id', component: ListOwnerEstatesComponent },
  { path: '**', redirectTo: '' }
];
