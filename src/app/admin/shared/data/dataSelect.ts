export class DataSelect {
  public static TIPO_DE_TRABAJO: any[] = [{
    value: 'Ejecutar'
  }, {
    value: 'Comprobar'
  }, {
    value: 'Escanear'
  },
  ];

  public static SCM: any[] = [{
    value: 'Manual'
  }, {
    value: 'GIT'
  }
  ];

  public static NIVEL_DE_DETALLE: any[] = [{
    value: '0 (Normal)'
  }, {
    value: '1 (Verbose)'
  },
    {
      value: '2 (Detalle)'
    },
    {
      value: '3 (Debug)'
    },
    {
      value: '4 (Connection)'
    }
  ];

  public static ENTORNO_ANSIBLE: any[] = [{
    value: 'Utilizar entorno predeterminado'
  }];

  public static HARDCODEO: any[] = [{
    value: '1'
  },{
    value: '2'
  },{
    value: '3'
  }
  ];

}
