import { useState, useCallback } from "react";
import Modal from "./Modal";

/**
 * @param onClose - optional function with no return that will run when closing the modal
 * @param { data-testid } - optional string that can attach for testing
 * @param header - optional string that will serve as the Modal's heading
 */
interface IScenarioProps {
  onClose?: () => void;
  "data-testid"?: string;
  header?: string;
  children?: React.ReactNode
}

const Scenario = ({ onClose, "data-testid": testId, header, children }: IScenarioProps) => {
  // Need a state to know when the Modal is closed or open. Determines if modal is rendered or not. Default state is true
  const [open, setIsOpen] = useState(true);

  // Usecallback is used so that if onClose is the same then we do not rerender the function.
  // Handles setting the open state to closed and calls the onClose prop function
  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  // Return null if modal is closed, therefore not worrying about hiding the modal
  if (!open) {
    return null;
  }

  // There is a wrapper around the modal to handle clicking on the outside of the modal.
  return (
    <div
      className="modal-outer"
      data-testid={testId}
      onClick={(e) => {
        e.stopPropagation();
        handleClose();
      }}
    >
      <Modal onClose={handleClose} header={header} children={children}/>
    </div>
  );
};

export default Scenario;
