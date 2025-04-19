import { useEffect } from 'react'

interface IModalProps {
    onClose: () => void;
    testId?: string;
}

/**
 * Modal component
 * Renders modal with an onClose button that can also be triggered by the escape key
 * 
 */
const Modal = ({ onClose, testId }: IModalProps) => {

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if(e.key === 'Escape'){
            onClose()
            }
        }

        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    },[onClose])

    return (
        <div role='dialog'>
            <div role='heading'></div>
            <button role='button' onClick={onClose}>Close</button>
        </div>
    )
}

export default Modal;