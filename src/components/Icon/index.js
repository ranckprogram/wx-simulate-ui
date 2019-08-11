import React from 'react';
import './style.css';

function Icon (props) {
  return (<span {...props} className={`iconfont ${props.type}`} style={{fontSize: '.48rem'}} />);
}

export default Icon;
