import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {PlantillaTrabajoComponent} from './admin/pages/plantilla-trabajo/plantilla-trabajo.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'plantillas',
        pathMatch: 'full'
      },
      {
        path: 'plantillaTrabajo',
        component: PlantillaTrabajoComponent
      },
      {
        path: 'plantillaWorkflow',
        loadChildren: () => import('./admin/pages/plantilla-workflow/plantilla-workflow.module').then(module => module.PlantillaWorkflowModule)
      },
      {
        path: 'plantillas',
        loadChildren: () => import('./admin/pages/plantillas/plantillas.module').then(module => module.PlantillasModule)
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
