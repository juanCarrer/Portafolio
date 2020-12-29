import logoLinkedin from '../../assets/images/icons8-linkedin.svg'
import logoGitHub from  '../../assets/images/icons8-github.svg'
import './styles.css'

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__logos__container'>
				<a href='https://www.linkedin.com/in/juan-carrero-4557321bb/' target="_blank" rel='noopener noreferrer'>
					<img
						className='footer__social__logo'
						src={logoLinkedin} 
						alt='ir a mi Linkedin'
					/>
				</a>
				<a href='https://github.com/juanCarrer' target="_blank" rel='noopener noreferrer'>
					<img
						className='footer__social__logo'
						src={logoGitHub} 
						alt='ir a mi Github'
					/>
				</a>
			</div>
			<h3 className='footer__info '>Página diseñada por Juan Carrero</h3>
		</footer>
	) 
}