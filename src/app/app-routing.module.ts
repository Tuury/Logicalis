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
        path: 'plantillas',
        loadChildren: () => import('./admin/pages/frm-validation/frm-validation.module').then(module => module.FrmValidationModule)
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
