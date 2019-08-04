import React from 'react';
import styles from './styles.module.css'
import avatar from './avatar.jpeg'
function Avatar (props) {
  const { src, size } = props;
  const jpg = src || avatar;

  return (
    <i className={`${styles.avatar} ${styles[size]}`} style={{ backgroundImage: `url(${jpg})` }}></i>
  );
}
export default Avatar;