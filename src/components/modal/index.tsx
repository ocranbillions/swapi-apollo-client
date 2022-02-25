import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Form from './form'
import "./style.css";

const Modal = (props: any) => {
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
            <button onClick={props.onClose} className="button">
              X
            </button>
          </div>
          <div className="modal-body">
            <Form 
              closeModal={props.onClose} 
              person={props.person} 
              createPerson={props.createPerson}
              updatePerson={props.updatePerson}
              homeworlds={props.homeworlds}
            />
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root") as HTMLElement
  );
};

export default Modal;
