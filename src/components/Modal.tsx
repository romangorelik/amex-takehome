import { useEffect } from "react";

/**
 * @param onClose - function with no return that will close the modal
 * @param header - string that will serve as the Modal's heading
 */
interface IModalProps {
  onClose: () => void;
  header?: string;
  children?: React.ReactNode;
}

/**
 * Modal component
 * Renders modal with an onClose button that can also be triggered by the escape key
 */
const Modal = ({ onClose, header = "Modal Header", children }: IModalProps) => {
  // Create a sideeffect after rendering that will attach the escape key to the onClose function
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", close);

    // Detach event listener when component is unmounted
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  // Basic Modal structure with a container, a heading, and a close button. The container has an onClick which stops propogation due to how we created the
  // onClick event on the parent container to close the modal when clicking outside.
  return (
    <div role="dialog" onClick={(e) => e.stopPropagation()} className="modal-container">
      <div role="heading" className="modal-header">
        {header}
      </div>
      {children && children}
      <button role="button" onClick={onClose} className="modal-close-button">
        Close
      </button>
    </div>
  );
};

export default Modal;
