import { useEffect } from "react";

interface IModalProps {
  onClose: () => void;
  header?: string;
}

/**
 * Modal component
 * Renders modal with an onClose button that can also be triggered by the escape key
 *
 */
const Modal = ({ onClose, header = "Modal Header" }: IModalProps) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div role="dialog" onClick={(e) => e.stopPropagation()} className="modal-container">
      <div role="heading">{header}</div>
      <button role="button" onClick={onClose} className="modal-close-button">
        Close
      </button>
    </div>
  );
};

export default Modal;
