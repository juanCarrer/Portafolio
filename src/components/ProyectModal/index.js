import propTypes from 'prop-types'
import closeButton from '../../assets/images/icons8-close.png' 
import './styles.css'

export const ProyectModal = ({ name, img, description, links, close }) => {
	return ( 
		<div className='modal__background'>
			<div className='proyect__modal__main'>
				<img
					src={closeButton}
					className='proyect__modal__main__close'
					onClick={close}
				/>
				<img className='proyect__modal__main__img' src={img} alt={`foto de proyecto ${name}`} />
				<h1 className='proyect__modal__main__title'>{name}</h1>
				<p className='proyect__modal__main__description'>{description}</p>
				{
					links && 
						<ul className='proyect__modal__main__links'>
							{
								links.map((link, i) => {
									return <li
										className='proyect__modal__main__links_item'
										key={`modal-link-${link.name}-${i}`}>
										<a
											className='proyect__modal__main__links_item__link'
											href={link.src}
											target="_blank"
											rel='noopener noreferrer'>
											{link.name}
										</a>
									</li>
								})
							}
						</ul>
				}
			</div>
		</div>
	)
}

ProyectModal.propTypes = {
	name: propTypes.string,
	img: propTypes.string,
	description: propTypes.string,
	links: propTypes.array,
	close: propTypes.func,
}