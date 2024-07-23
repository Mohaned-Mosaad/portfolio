import React, { useEffect, useRef } from 'react';

const ClickOutsideDetector = ({onClickOutside, children, exceptionRef, className}) => {
   
   const wrapperRef = useRef(null)
   
   useEffect(() => {
      document.addEventListener('mousedown', handleClickListener);
      
      return () => {
        document.removeEventListener('mousedown', handleClickListener);
      };
   }, []);

   const handleClickListener = (event) => {
      let clickedInside = false;
      let isClickedInside = (wrapperRef && wrapperRef.current.contains(event.target));
      if(exceptionRef) {
         clickedInside = isClickedInside || exceptionRef.current === event.target || exceptionRef.current.contains(event.target);
      } else {
        clickedInside = isClickedInside;
      }
  
      if (clickedInside) return;
      else onClickOutside();
   }

   return (
      <div ref={wrapperRef} className={`${className || ''}`}>
         {children}      
      </div>
   );
};

export default ClickOutsideDetector;