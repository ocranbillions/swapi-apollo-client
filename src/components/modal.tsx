import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createUseStyles } from 'react-jss';
import { CSSTransition } from "react-transition-group";

import { CustomThemeI } from '../@types';

import Form from './form'
import "./modal.css";


const useStyles = createUseStyles((theme: CustomThemeI) => ({
  // modal: {
  //   position: 'fixed',
  //   left: 0,
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   opacity: 0,
  //   transition: 'all 0.3s ease-in-out',
  //   pointerEvents: 'none',
  // },
}
));

const Modal = (props: any) => {
  const s = useStyles();

  const closeOnEscapeKeyDown = (e: { charCode: any; keyCode: any; }) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
            <Form closeModal={props.onClose}/>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root") as HTMLElement
  );
};

export default Modal;
