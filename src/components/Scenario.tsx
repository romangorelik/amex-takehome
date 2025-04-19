import { useState, useCallback } from 'react';
import Modal from './Modal';

interface IScenarioProps {
    onClose?: () => void;
    "data-testId"?: string;
}
const Scenario = ({ onClose, "data-testId": testId }: IScenarioProps) => {
    const [open, setIsOpen] = useState(true)

    const handleClose = useCallback(() => {
        setIsOpen(false)
        onClose?.()
    }, [onClose])

    if (!open) {
        return null
    }

    return (
        <Modal open={open} onClose={handleClose} testId={testId}/>
    )
}

export default Scenario;