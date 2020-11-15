import { Fragment } from 'react'
import  { useModal }  from '../../hooks/useModal'
import propTypes from 'prop-types'
import { ProyectModal } from '../ProyectModal'
import './styles.css'

const dummyLinks = [
	{
		name: 'github',
		src: 'https://github.com/juanCarrer/Micro_Procesador_arqComp',
	},
	{
		name: 'page',
		src: 'https://github.com/juanCarrer/Micro_Procesador_arqComp',
	},
	{
		name: 'cliente',
		src: 'https://github.com/juanCarrer/Micro_Procesador_arqComp',
	},
] 

export const ProyectCard = ({ name, img }) => {
	const [showModal, toggleModal] = useModal(false)

	return (
		<Fragment>
		{
			showModal && 
				<ProyectModal 
					name={name}
					img={img}
					description='Lorem ipsum dolor sit amet, consectetur aamet, consec'
					links={dummyLinks}
					close={toggleModal}
				/>
		}
			<div className='ProyectCard' onClick={toggleModal}>
				<img className='ProyectCard__img' src={img} alt={`foto de proyecto ${name}`}/>
				<h2 className='ProyectCard__name'>{name}</h2>
			</div>
		</Fragment>
	)
}

ProyectCard.propTypes = {
	name: propTypes.string,
	img: propTypes.string
}