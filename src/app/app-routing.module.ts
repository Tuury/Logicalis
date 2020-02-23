import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/crm',
        pathMatch: 'full'
      },
      {
        path: 'plantillaTrabajo',
        loadChildren: () => import('./admin/pages/plantilla-trabajo/plantilla-trabajo.module').then(module => module.PlantillaTrabajoModule)
      },
      {
        path: 'plantillaWorkflow',
        loadChildren: () => import('./admin/pages/plantilla-workflow/plantilla-workflow.module').then(module => module.PlantillaWorkflowModule)
      },
      {
        path: 'proyectos',
        loadChildren: () => import('./admin/pages/proyectos/proyectos.module').then(module => module.ProyectosModule)
      },
      {
        path: 'organizaciones',
        loadChildren: () => import('./admin/pages/organizaciones/organizaciones.module').then(module => module.OrganizacionesModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
