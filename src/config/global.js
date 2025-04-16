export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Generalidades de las sustancias psicoactivas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades de las sustancias psicoactivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Depresores del sistema nervioso central',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estimulantes del sistema nervioso central',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Alucinógenos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Clasificación, según su origen',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Clasificación, según su legalidad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Problemáticas asociadas al consumo de sustancias psicoactivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Factores biológicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Consecuencias sociales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Consecuencias económicas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Etiología de la farmacodependencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Factores biológicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Factores psicológicos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Otros factores',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Interacción de factores',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'López-Muñoz, F., González, E., Serrano, M.D., Antequera, R., & Alamo, C.. (2011). Una visión histórica de las drogas de abuso desde la perspectiva criminológica (Parte I). Cuadernos de Medicina Forense, 17(1), 21-33.',
      link:
        'http://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1135-76062011000100005&lng=es&tlng=es',
    },
    {
      referencia:
        'Oficina de Naciones Unidas contra la droga y el delito. OMS. Informe mundial sobre drogas 2016. [Internet]. 2016 [citado 2018 Ene 24].',
      link: 'https://www.unodc.org/doc/wdr2016/WDR_2016_ExSum_spanish.pdf',
    },
    {
      referencia:
        'Venegas Silva, Viviana. (2014). Legalización de la marihuana, la libertad que amenaza la salud pública. Revista chilena de pediatría',
      link: 'http://dx.doi.org/10.4067/S0370-41062014000600001',
    },
    {
      referencia:
        'Organización de los Estados Americanos (OEA). El problema de las drogas en las Américas [internet]. 2013 [citado 2020 abr 08].',
      link:
        'http://fileserver.idpc.net/library/Informe-OEA_El-problema-de-las-drogas-en-lasAmericas.pdf',
    },
    {
      referencia:
        'González González, A. & González González, A. (Coord.). (2011). Juventud, cultura y consumo de sustancias en contextos escolares: ( ed.). Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/41215?page=46',
    },
    {
      referencia:
        'García Payares, R. M., Mendoza Figueredo, S. P., & Rivera Altamiranda, Y. D. C. (2020). Contexto sociofamiliar en el desarrollo de adicciones a sustancias psicoactivas en adolescentes.',
      link:
        'https://repositorio.cecar.edu.co/server/api/core/bitstreams/d7562fe1-03e7-4cd2-99f4-64211e303380/content',
    },
  ],
  glosario: [
    {
      termino: 'Abstinencia',
      significado:
        'Síntomas físicos y psicológicos al dejar de consumir una droga.',
    },
    {
      termino: 'Adicción',
      significado:
        'Enfermedad crónica caracterizada por el uso compulsivo de drogas.',
    },
    {
      termino: 'Alucinógenos',
      significado: 'Sustancias que alteran la percepción de la realidad.',
    },
    {
      termino: 'Depresores',
      significado:
        'Sustancias que disminuyen la actividad del sistema nervioso central.',
    },
    {
      termino: 'Dopamina',
      significado:
        'Neurotransmisor clave en la sensación de placer y recompensa.',
    },
    {
      termino: 'Estimulantes',
      significado: 'Drogas que aumentan la actividad del sistema nervioso.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'Elementos que aumentan la probabilidad de desarrollar una adicción.',
    },
    {
      termino: 'Factores protectores',
      significado: 'Condiciones que reducen el riesgo de consumo de drogas.',
    },
    {
      termino: 'Farmacodependencia',
      significado:
        'Dependencia física y psicológica de una sustancia psicoactiva.',
    },
    {
      termino: 'Neurotransmisor',
      significado:
        'Sustancia química que transmite señales en el sistema nervioso.',
    },
    {
      termino: 'Políticas de drogas',
      significado:
        'Normativas para el control y prevención del consumo de sustancias.',
    },
    {
      termino: 'Síndrome de abstinencia',
      significado:
        'Conjunto de síntomas que ocurren al suspender el consumo de una droga.',
    },
    {
      termino: 'Sustancias psicoactivas',
      significado:
        'Compuestos químicos que alteran la percepción y el comportamiento.',
    },
  ],
}
