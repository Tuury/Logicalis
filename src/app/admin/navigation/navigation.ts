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
        id: 'plantillaTrabajo',
        title: 'Plantillas de Trabajo',
        type: 'item',
        url: '/plantillaTrabajo',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'plantillaWorkflow',
        title: 'Plantillas de Workflow',
        type: 'item',
        url: '/plantillaWorkflow',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'credenciales',
        title: 'Credenciales',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'proyectos',
        title: 'Proyectos',
        type: 'item',
        url: '/proyectos',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'inventario',
        title: 'Inventario',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'scripts-inventario',
        title: 'Scripts de inventario',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
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
        icon: 'feather icon-sidebar',
      },
      {
        id: 'usuarios',
        title: 'Usuarios',
        type: 'item',
        url: '/usuarios',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'equipos',
        title: 'Equipos',
        type: 'item',
        url: '/equipos',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
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
