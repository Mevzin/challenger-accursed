import React, { useRef, useState } from "react";
import { TooltipTarget, TooltipBox } from "./styles";

export function Tooltip({ children, text }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    // Use event.pageX / event.pageY here
    setPosX(event.pageX);
    setPosY(event.pageY);
  }

  return (
    <>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        highlightOnHover={isHovered}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <TooltipBox positionX={posX} positionY={posY}>
          {text}
        </TooltipBox>
      )}
    </>
  );
}
