import propTypes from 'prop-types'
import closeButton from '../../assets/images/icons8-close.png' 
import './styles.css'

export const CoursesModal = ({ courseName, src, close }) => {
	return (
		<div className='modal__background'>
			<div className='courses__modal__main'>
				<img src={closeButton} className='courses__modal__main__close' onClick={close} />
				<img
					className='courses__modal__main__img'
					src={src}
					alt={`certificado del curso ${courseName}`} />
			</div>
		</div>
	)
}

CoursesModal.propTypes = {
	courseName: propTypes.string,
	src: propTypes.string,
	close: propTypes.func,
}
