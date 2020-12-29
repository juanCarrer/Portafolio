import srcMPR from './proyects/MPR.png'
import srcBreads_API from './proyects/bread_api.png'
import srcUchurita from './proyects/uchurita.png'

const data = [
	{
		name: 'Microprocesador',
		description: 'Diseño y simulación de procesador en C++ con SystemC',
		img: srcMPR,
		links: [
			{
				name: 'Github',
				src: 'https://github.com/juanCarrer/Micro_Procesador_arqComp',
			},
		]
	},
	{
		name: 'Breads API',
		description: 'API para recetas de pan hecha con NodeJs y Express',
		img: srcBreads_API,
		links: [
			{
				name: 'Github',
				src: 'https://github.com/juanCarrer/Breads-API',
			},
		]
	},
  {
    name: 'Uchurita',
    description: 'página de e-commerce para emprendimiento de helados. desarrollado con Nextjs y MongoDB',
    img: srcUchurita,
    links: [
      {
        name: 'Github',
        src: 'https://github.com/juanCarrer/uchurita',
      },
      {
        name: 'pagina',
        src: 'https://uchurita.vercel.app',
      },
    ]
  },
]

export default data