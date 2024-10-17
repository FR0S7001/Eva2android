import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // Importa el guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [authGuard] // Protege la ruta con el guard
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./materias/materias.module').then(m => m.MateriasPageModule),
    canActivate: [authGuard] // Protege la ruta con el guard
  },
  {
    path: 'foro',
    loadChildren: () => import('./foro/foro.module').then(m => m.ForoPageModule),
    canActivate: [authGuard] // Protege la ruta con el guard
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [authGuard] // Protege la ruta con el guard
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./pages/loginscreen/loginscreen.module').then(m => m.LoginscreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'restarpass',
    loadChildren: () => import('./pages/restarpass/restarpass.module').then(m => m.RestarpassPageModule)
  },
 
  {
    path: 'pg404',
    loadChildren: () => import('./pg404/pg404.module').then( m => m.Pg404PageModule)
  },
  {
    path: '**',
    redirectTo: 'pg404'
  },


  // Puedes agregar más rutas aquí según sea necesario
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
