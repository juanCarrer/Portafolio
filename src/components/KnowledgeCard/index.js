import './styles.css'
import propTypes from 'prop-types'


export const KnowledgeCard = ({ title, imgSrc }) => {
	return (
		<div className='KnowledgeCard'>
			<h1 className='KnowledgeCard__title'>{title}</h1>
			<div className='KnowledgeCard__container'>
				<img className='KnowledgeCard__img' src={imgSrc} alt={`imagen de ${title}`}/>
			</div>
		</div>
	)
}

KnowledgeCard.propTypes = {
	title: propTypes.string,
	imgSrc: propTypes.string
}