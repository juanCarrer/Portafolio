import { Fragment } from 'react'
import  { useModal }  from '../../hooks/useModal'
import propTypes from 'prop-types'
import { ProyectModal } from '../ProyectModal'
import './styles.css'

export const ProyectCard = ({ name, img, description, links }) => {
	const [showModal, toggleModal] = useModal(false)

	return (
		<Fragment>
		{
			showModal && 
				<ProyectModal 
					name={name}
					img={img}
					description={description}
					links={links}
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
	img: propTypes.string,
	description: propTypes.string,
	links: propTypes.array
}