import React from 'react';
import styles from './styles.module.css'
import avatar from './avatar.jpeg'
function Avatar () {
  return (
    <i className={styles.avatar} style={{backgroundImage: `url(${avatar})`}}></i>
  );
}
export default Avatar;