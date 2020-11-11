import { KnowledgeCard } from  '../KnowledgeCard'
import knowledgeData from '../../assets/knoledgeData.js'

export const Knowledge = () => {

	return (
		<section>
			<h1 className='section__title' >Conocimientos</h1>
			<div className='section__grid'>
			{
				knowledgeData && knowledgeData.map((item, i) => {
					return <KnowledgeCard
						key={`Knowledge-item-${i}`}
						title={item.title}
						imgSrc={item.img}/>
				}) 
			}
			</div>
		</section>
	)
}