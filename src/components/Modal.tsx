import { useEffect } from 'react'

interface IModalProps {
    onClose: () => void;
}

/**
 * Modal component
 * Renders modal with an onClose button that can also be triggered by the escape key
 * 
 */
const Modal = ({ onClose }: IModalProps) => {

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
        <div role='dialog' style={{border: '1px solid red'}} onClick={(e) => e.stopPropagation()}>
            <div>
                <div role='heading'>Modal</div>
                <button role='button' onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal;