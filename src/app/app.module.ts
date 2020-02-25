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
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationItem} from './admin/navigation/navigation';
import {BreadcrumbModule} from './admin/shared/breadcrumb/breadcrumb.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    NavSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    NgbDropdownModule
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
