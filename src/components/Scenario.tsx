import { useState, useCallback } from 'react';
import Modal from './Modal';

interface IScenarioProps {
    onClose?: () => void;
    "data-testid"?: string;
    header?: string;
}
const Scenario = ({ onClose, "data-testid": testId, header }: IScenarioProps) => {
    const [open, setIsOpen] = useState(true)

    const handleClose = useCallback(() => {
        setIsOpen(false)
        onClose?.()
    }, [onClose])

    if (!open) {
        return null
    }

    return (
        <div className='modal-outer' data-testid={testId} onClick={(e) => {
            e.stopPropagation()
            handleClose()
        }}>
            <Modal onClose={handleClose} header={header}/>
        </div>
    )
}

export default Scenario;