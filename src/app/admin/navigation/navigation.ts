import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Recursos',
    type: 'group',
    icon: 'feather icon-activity',
    children: [
      {
        id: 'plantillas',
        title: 'Plantillas',
        type: 'item',
        url: '/plantillas',
        classes: 'nav-item',
        icon: 'feather icon-edit',
      },
      {
        id: 'proyectos',
        title: 'Proyectos',
        type: 'item',
        url: '/proyectos',
        classes: 'nav-item',
        icon: 'feather icon-folder',
      }
    ]
  },
  {
    id: 'acceso',
    title: 'Acceso',
    type: 'group',
    icon: 'feather icon-activity',
    children: [
      {
        id: 'organizaciones',
        title: 'Organizaciones',
        type: 'item',
        url: '/organizaciones',
        classes: 'nav-item',
        icon: 'feather icon-command',
      }
    ]
  }

];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
