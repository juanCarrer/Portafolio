import './styles.css'

export const Contact = () => {
	return (
		<section>
			<h1 className='section__title'>Contactame</h1>
			<form className='Contact__form'>
				<input className='Contact__form__input' type='email' placeholder='tuCorrero@mail.com'/>
				<button className='Contact__form__button' >
					Enviar
				</button>
			</form>
		</section>
	)
}