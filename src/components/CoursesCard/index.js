import { Fragment } from 'react'
import propTypes from 'prop-types'
import { useModal } from '../../hooks/useModal'
import { CoursesModal } from '../CoursesModal'
import './styles.css'

export const CoursesCard = ({ name, src }) => {
	const [showModal, toggleModal] = useModal(false)

	return (
		<Fragment>
			{
				showModal &&
					<CoursesModal 
						close={toggleModal}
						courseName={name}
						src={src}
					/> 
			}
			<div onClick={toggleModal} className='coursesCard'>
				<h1 className='coursesCard__name'>{name}</h1>
			</div>
		</Fragment>
	)
}

CoursesCard.propTypes = {
	name: propTypes.string,
	src: propTypes.string
}