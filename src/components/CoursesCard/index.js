import propTypes from 'prop-types'
import './styles.css'

export const CoursesCard = ({ name }) => {
	const handlerClick = (e) => {
		console.log('click en curso')
		console.log(e)
	}

	return (
		<div onClick={handlerClick} className='coursesCard'>
			<h1 className='coursesCard__name'>{name}</h1>
		</div>
	)
}

CoursesCard.propTypes = {
	name: propTypes.string
}