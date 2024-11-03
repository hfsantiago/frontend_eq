import { Routes } from '@angular/router';
import { AddEditIndicatorsComponent } from './add-edit-indicators/add-edit-indicators.component';

export const routes: Routes = [
    { path: 'indicatos/new', component: AddEditIndicatorsComponent },
  { path: 'indicators/edit/:id', component: AddEditIndicatorsComponent }
];
