import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const cssClasses = [
    'Backdrop',
    props.closed ? 'BackdropOpen' : 'BackdropClosed',
  ];
  return <div className={cssClasses}></div>;
};

export default backdrop;
