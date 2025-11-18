
import { Routes } from '@angular/router';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page';

export const routes: Routes = [
   { path: '', component: DoctorsPageComponent }, // route racine  
  /*{ path: 'medecins', component: MedecinsListComponent },// liste   */
  { path: '**', redirectTo: '' }, // wildcard (toujours en dernier)
 ];