import { useState, useCallback } from 'react';
import Modal from './Modal';

interface IScenarioProps {
    onClose?: () => void;
    "data-testid"?: string;
}
const Scenario = ({ onClose, "data-testid": testId }: IScenarioProps) => {
    const [open, setIsOpen] = useState(true)

    const handleClose = useCallback(() => {
        setIsOpen(false)
        onClose?.()
    }, [onClose])

    if (!open) {
        return null
    }

    return (
        <div data-testid={testId} onClick={(e) => {
            e.stopPropagation()
            handleClose()
        }}>
            <Modal onClose={handleClose} />
        </div>
    )
}

export default Scenario;