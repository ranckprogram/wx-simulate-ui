import React, { useState } from 'react';
import styles from './style.module.css';
function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUserChange (e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange (e) {
    setPassword(e.target.value);
  }

  function handleLogin () {
    if (!!username && !! password) {
      console.log('login')
    } else {
      alert('请输入账户和密码')
    }
  }

  return (<div className={styles.form}>
    <ul>
      <li className={styles.formItem}>
        <input className={styles.formInput} value={username} onChange={handleUserChange} />
      </li>
      <li className={styles.formItem}>
        <input className={styles.formInput} value={password} onChange={handlePasswordChange}/>
      </li>
      <li className={styles.formItem}>
        <button className={styles.formButton} onClick={handleLogin}>登录</button>
      </li>
    </ul>
  </div>);
}

export default Login;
