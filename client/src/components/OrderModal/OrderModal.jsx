import React from "react";
import { useState } from "react";
import s from "./OrderModal.module.css";

const OrderModal = ({active, setActive, children}) => {
  return (
        <div className={active ? [s.overlay, s.animated, s.show].join(' ') : [s.overlay, s.animated].join(' ')}>
          <div className={s.modal}>
            <svg onClick={(e)=>{ e.stopPropagation(); e.preventDefault(); setActive(false)}} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            {children}
          </div>
        </div>
  );
};

export default OrderModal;