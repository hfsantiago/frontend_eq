import { Routes } from '@angular/router';
import { AddEditIndicatorsComponent } from './add-edit-indicators/add-edit-indicators.component';
import { AppComponent } from './app.component';
import { IndicatorListComponent } from './indicator-list/indicator-list.component';

export const routes: Routes = [
    { path: 'indicators', component: IndicatorListComponent, pathMatch: 'full' },
    { path: 'indicators/new', component: AddEditIndicatorsComponent },
    { path: 'indicators/edit/:id', component: AddEditIndicatorsComponent }
];
