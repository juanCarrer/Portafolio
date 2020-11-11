import { ProyectCard } from '../ProyectCard'
import ProyectsData from '../../assets/proyectsData'

export const Proyects = () => {
	return (
		<section>
			<h1 className='section__title'>Proyectos</h1>
			<div className='section__grid'>
			{
				ProyectsData && ProyectsData.map((item, i) => {
					return <ProyectCard key={`proyec-item-${i}`} name={item.name} img={item.img} />
				})
			}
			</div>
		</section>
	)
}