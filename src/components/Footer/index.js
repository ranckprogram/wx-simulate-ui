import React, {useState} from 'react';
import styles from './styles.module.css';
function Footer (props) {
  const [value, setValue] = useState('');
  return (<div className={styles.content}>
    <input className={styles.input}  value={value} onChange={(e) => setValue(e.target.value)}/>
    <button className={styles.button} onClick={() => props.onSend(value)}>发送</button>
  </div>);
}

export default Footer;
