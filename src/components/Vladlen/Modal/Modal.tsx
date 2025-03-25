import { ModalProps } from "../../../interface/interface";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";
import Button from "../Button/Button";
import { useEffect, useRef } from "react";

const Modal: React.FC<ModalProps> = ({ children, open, toggleModal }) => {
  const dialog = useRef<HTMLDialogElement>(null); // Указание типа для useRef

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }

    // Закрытие модального окна по нажатию клавиши Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }; // Чистка при размонтировании
  }, [open, toggleModal]);

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null; // Проверка существования modalRoot

  return createPortal(
    <dialog ref={dialog} className={style.dialog}>
      <Button onClick={toggleModal}>Закрыть</Button>
      {children}
    </dialog>,
    modalRoot
  );
};

export default Modal;