import { useState, useEffect } from 'react'

export const useModal = (initialState = false) => {
	const [showModal, setShowModal] = useState(initialState)

	const toggelModal = () => {
		setShowModal(!showModal)
	}

	const handleKeyPress = ({ keyCode }) => {
		if (keyCode === 27) {
			setShowModal(false)
		}
	}

	useEffect(() =>{
		if (showModal){
			document.addEventListener('keyup', handleKeyPress)
		}

		return () => {
			document.removeEventListener('keyup', handleKeyPress)
		}

	}, [showModal])

	return [showModal, toggelModal]
}
