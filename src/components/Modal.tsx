

interface IModalProps {
    open: boolean;
    onClose: () => void;
    testId?: string;
}
const Modal = ({ open, onClose, testId }: IModalProps) => {

    return (
        <div role='dialog'>
            <div role='heading'></div>
            <button role='button' onClick={onClose}>Close</button>
        </div>
    )
}

export default Modal;