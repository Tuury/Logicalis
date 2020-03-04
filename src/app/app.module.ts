import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {NavigationComponent} from './admin/navigation/navigation.component';
import {NavBarComponent} from './admin/nav-bar/nav-bar.component';
import {NavContentComponent} from './admin/navigation/nav-content/nav-content.component';
import {NavGroupComponent} from './admin/navigation/nav-content/nav-group/nav-group.component';
import {NavCollapseComponent} from './admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import {NavItemComponent} from './admin/navigation/nav-content/nav-item/nav-item.component';
import {NavLeftComponent} from './admin/nav-bar/nav-left/nav-left.component';
import {NavRightComponent} from './admin/nav-bar/nav-right/nav-right.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NavSearchComponent} from './admin/nav-bar/nav-right/nav-search/nav-search.component';
import {NgbDropdownModule, NgbNavModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationItem} from './admin/navigation/navigation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgJsonEditorModule} from 'ang-jsoneditor';
import {BreadcrumbModule} from './admin/shared/breadcrumb/breadcrumb.module';
import {PlantillaTrabajoComponent} from './admin/pages/plantilla-trabajo/plantilla-trabajo.component';
import {CardModule} from './admin/shared/card/card.module';
import {FormsModule} from '@angular/forms';
import {ModalModule} from './admin/shared/ui-modal/modal.module';
import {SelectModule} from 'ng-select';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavigationComponent,
    NavBarComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavLeftComponent,
    NavRightComponent,
    NavSearchComponent,
    PlantillaTrabajoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    NgbDropdownModule,
    NgJsonEditorModule,
    BreadcrumbModule,
    NgbTabsetModule,
    CardModule,
    FormsModule,
    NgbTooltipModule,
    NgbNavModule,
    ModalModule,
    SelectModule,
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
