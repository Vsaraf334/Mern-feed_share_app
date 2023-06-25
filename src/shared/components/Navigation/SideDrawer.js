import React, { useRef } from "react";

import "./SideDrawer.css";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const nodeRef = useRef();
  const content = (
    <CSSTransition
      in={props.show}
      nodeRef={nodeRef}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside ref={nodeRef} className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
