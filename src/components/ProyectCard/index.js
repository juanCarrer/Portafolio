import './styles.css'
import propTypes from 'prop-types'

export const ProyectCard = ({ name, img }) => {
	return (
		<div className='ProyectCard' >
			<img className='ProyectCard__img' src={img} alt={`foto de proyecto ${name}`}/>
			<h2 className='ProyectCard__name'>{name}</h2>
		</div>
	)
}

ProyectCard.propTypes = {
	name: propTypes.string,
	img: propTypes.string
}