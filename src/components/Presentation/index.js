import './styles.css'
import fotoPerfil from '../../assets/images/fotoPerfil.jpg'
import logoLinkedin from '../../assets/images/icons8-linkedin.svg'
import logoGitHub from  '../../assets/images/icons8-github.svg'

export const Presentation = () => {
  return (
    <section className='presentation'>
        <img className='presentation__img' src={fotoPerfil} alt='foto de perfil Juan' />
        <h1 className='presentation__name'>Juan Carrero</h1>
        <p className='presentation__info'>
          Lorem ipsum dolor sit amet, consectetur aamet, consec
        </p>
        <div className='presentation__social'>
          <a href='#'>
            <img
              className='presentation__social__logo'
              src={logoLinkedin} 
              alt='ir a mi Linkedin'
            />
          </a>
          <a href='https://github.com/juanCarrer' target="_blank" rel='noopener noreferrer'>
            <img
              className='presentation__social__logo'
              src={logoGitHub} 
              alt='ir a mi Github'
            />
          </a>
        </div>
      </section>
  )
}