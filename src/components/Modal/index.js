import React from "react";
import { createPortal } from "react-dom";
import { ModalWrapper, ModalBody, CloseButton } from "./style";

// adapted from http://www.vimalselvam.com/2019/04/08/form-in-modal-using-react-hooks-mistakes-and-lesson-learnt/

// Creates a portal outside the DOM hierarchy
const Portal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(<div>{children}</div>, modalRoot);

}

// A modal component which will be used by other components / pages
const Modal = ({ children, toggle, open }) => {
  return (
    <Portal>
      {open && (
        <ModalWrapper onClick={toggle}>
          <ModalBody onClick={event => event.stopPropagation()}>
            <CloseButton onClick={toggle}>
              &times;
            </CloseButton>
            {children}
          </ModalBody>
        </ModalWrapper>
      )}
    </Portal>
  );
}

export default Modal;