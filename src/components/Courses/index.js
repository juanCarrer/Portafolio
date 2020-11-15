import { useState } from 'react'
import { CoursesCard } from '../CoursesCard'
import coursesData from '../../assets/coursesData'
import './styles.css'

export const Courses = () => {
	const [coursesLimit, setCoursesLimit] = useState(4)

	const handleClick = (limit) => {
		if (!limit || typeof limit != 'number' ) {
			setCoursesLimit(coursesData.length)
		}
		else {
			setCoursesLimit(limit)
		}
	}

	return (
		<section>
			<h1 className='section__title'>Cursos</h1>
			<div className='courses__list'>
			{
				coursesData &&
					coursesData.slice(0, coursesLimit).map((item, i) => (
						<CoursesCard
							key={`courses-item-${i}`}
							name={item.name}
						/>
					))
			}
			</div>
			<div className='courses__show'>
				{
					(!(coursesLimit === coursesData.length)) ?
						<p onClick={handleClick} className='courses__show__button'>Ver Todos</p>
					:	
						<p onClick={() => handleClick(4)} className='courses__show__button'>Ver Menos</p>
				}
			</div>
		</section>
	)
}