// ============================================
// components/ui/Modal.jsx
// ============================================
// USAGE:
// const [isOpen, setIsOpen] = useState(false);

// <Modal
//   isOpen={isOpen}
//   onClose={() => setIsOpen(false)}
//   title="Confirm Action"
//   size="md"
//   footer={
//     <>
//       <Button variant="neutral" onClick={() => setIsOpen(false)}>Cancel</Button>
//       <Button variant="danger" onClick={handleDelete}>Delete</Button>
//     </>
//   }
// >
//   <p>Are you sure you want to delete this item?</p>
// </Modal>

import { cn } from "@/lib/utils";
import { modalVariants, modalDefaults } from "@/lib/componentConfig";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  size = modalDefaults.size,
  title,
  children,
  footer,
  closeOnOverlayClick = true,
  showCloseButton = true,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={modalDefaults.overlay}
      onClick={() => closeOnOverlayClick && onClose()}
    >
      <div
        className={cn(
          modalDefaults.container,
          modalVariants.size[size],
          className
        )}
        style={{
          backgroundColor: modalDefaults.bgColor,
          borderRadius: modalDefaults.borderRadius,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div
            className={cn(
              modalDefaults.header,
              "flex items-center justify-between"
            )}
            style={{ borderColor: modalDefaults.borderColor }}
          >
            {title && <h3 className='text-xl font-semibold'>{title}</h3>}
            {showCloseButton && (
              <button
                onClick={onClose}
                className='text-gray-400 hover:text-gray-600 text-2xl leading-none'
              >
                ×
              </button>
            )}
          </div>
        )}

        <div className={modalDefaults.body}>{children}</div>

        {footer && (
          <div
            className={modalDefaults.footer}
            style={{ borderColor: modalDefaults.borderColor }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
