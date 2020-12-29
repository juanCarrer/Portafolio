import { useState } from 'react'
import emailjs from 'emailjs-com'
import './styles.css'

const serviceId = process.env.REACT_APP_SERVICE_ID  // eslint-disable-line
const templateId = process.env.REACT_APP_TEMPLATE_ID  // eslint-disable-line
const userId = process.env.REACT_APP_USER_ID  // eslint-disable-line

export const Contact = () => {
	const [statusMessage, setStatusMessage] = useState()

	const sendEmail = async (event) => {
		event.preventDefault()
		try {
			const result = await emailjs.sendForm(
				serviceId,
				templateId,
				event.target,
				userId
			)
			if(result.status === 200) {
				setStatusMessage({
					success: true,
					message:'Mensaje enviado con exito'
				})
			}

		} catch (error) {
			setStatusMessage({
				success: false,
				message:'Error al enviar el mensaje'
			})
		}

		event.target.reset()
	}


	return (
		<section onSubmit={sendEmail}>
			<h1 className='section__title'>Contáctame</h1>
			<form className='Contact__form'>
				<input
					required
					name='client_name'
					className='Contact__form__input'
					type='text'
					placeholder='Nombre'
				/>
				<input
					required
					name='client_mail'
					className='Contact__form__input'
					type='email'
					placeholder='TuCorreo'
				/>
				<button className='Contact__form__button' >
					Enviar
				</button>
			</form>
			{
				statusMessage && 
					<p 
						className={`contact__status contact__status--${statusMessage.success ? 'success' : 'error'}`}
					>
						{statusMessage.message}
					</p>
			}
		</section>
	)
}