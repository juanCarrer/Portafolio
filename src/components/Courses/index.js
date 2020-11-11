import { CoursesCard } from '../CoursesCard'
import './styles.css'

export const Courses = () => {
	return (
		<section>
			<h1 className='section__title'>Cursos</h1>
			<div className='courses__list'>
				<CoursesCard name='nombre'/>
				<CoursesCard name='nombre'/>
				<CoursesCard name='nombre'/>
				<CoursesCard name='nombre'/>
				<CoursesCard name='nombre'/>
				<a href='#' className='courses__show'>ver todos</a>
			</div>
		</section>
	)
}