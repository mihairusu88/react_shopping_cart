import { Fragment, useState, useEffect, useRef } from 'react';
import './Modal.scss';
import { CSSTransition } from 'react-transition-group';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Modal = (props) => {
  const [isVisible, setVisible] = useState(true);
  const body = document.querySelector('body');
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const transitionTimeout = {
    appear: 0,
    enter: 0,
    exit: 200,
  };

  useEffect(() => {
    !isVisible || open();
    isVisible ? disableBodyScroll(body, { reserveScrollBarGap: true }) : enableBodyScroll(body);
  }, [isVisible]);

  const open = () => {
    !props.onOpenModal || props.onOpenModal();
  };

  const close = () => {
    setVisible(false);
    !props.onCloseModal || props.onCloseModal();
  };

  const onConfirm = () => {
    close();
    !props.onConfirmModal || props.onConfirmModal();
  };

  return (
    <Fragment>
      <CSSTransition
        in={isVisible}
        nodeRef={backdropRef}
        timeout={transitionTimeout}
        classNames="fade-no-scale"
        appear
        unmountOnExit
      >
        <div ref={backdropRef} className="modal-backdrop" role="presentation" onClick={close}></div>
      </CSSTransition>
      <CSSTransition
        in={isVisible}
        nodeRef={modalRef}
        timeout={transitionTimeout}
        classNames="fade"
        appear
        unmountOnExit
      >
        <div ref={modalRef} className="modal">
          <div className="modal__container">
            <div className="modal__header">{props.title}</div>
            <div className="modal__content">{props.component}</div>
            <div className="modal__footer">
              {props.confirmButton && (
                <button type="button" onClick={onConfirm}>
                  {props.confirmButton}
                </button>
              )}
              {props.cancelButton && (
                <button type="button" onClick={close}>
                  {props.cancelButton}
                </button>
              )}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
