import { Routes } from '@angular/router';
import { KonkanPackagesComponent } from './konkan-packages/konkan-packages.component';
import { PackageDetailComponent } from './konkan-packages/package-detail/package-detail.component';
import { LoginComponent } from './login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/konkan-packages', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'konkan-packages', component: KonkanPackagesComponent },
  { path: 'konkan-packages/:id', component: PackageDetailComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flights/:id', component: FlightDetailComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:id', component: HotelDetailComponent }
];
