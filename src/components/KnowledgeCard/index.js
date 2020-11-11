import './styles.css'
import propTypes from 'prop-types'


export const KnowledgeCard = ({ title, imgSrc }) => {
	return (
		<div className='KnowledgeCard'>
			<h1 className='KnowledgeCard__title'>{title}</h1>
			<img className='KnowledgeCard__img' src={imgSrc} alt={`imagen de ${title}`}/>
		</div>
	)
}

KnowledgeCard.propTypes = {
	title: propTypes.string,
	imgSrc: propTypes.string
}