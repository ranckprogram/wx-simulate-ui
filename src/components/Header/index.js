import React from 'react';
import styles from './style.module.css'
function Header (props) {
    const hasBack = false;
    return (
        <div className={styles.header}>
            {hasBack && <i className={`${styles.icon} ${styles.back}`} >&lt;</i>}
            <h3 className={styles.title}>微信</h3>
            <input style={{ display: 'none' }} className={styles.input} placeholder="搜索" />
            <div className={styles.headerRight}>
                <i className={styles.icon}>s</i>
                <i className={styles.icon}>+</i>
                <i className={styles.icon}>...</i>
            </div>
        </div>
    );
}

export default Header;