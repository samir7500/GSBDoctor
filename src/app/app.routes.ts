import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Redirection par défaut vers login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Page de connexion (accessible sans authentification)
  { path: 'login', component: LoginComponent },

  // Liste des médecins (PROTÉGÉE par le guard)
  {
    path: 'doctors',
    component: DoctorsPageComponent,
    canActivate: [authGuard]  // 🔒 Route protégée
  },

  // Route par défaut (redirection vers login)
  { path: '**', redirectTo: '/login' }
];