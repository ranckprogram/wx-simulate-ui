import React from 'react';
import styles from './style.module.css'
import Icon from '@/components/Icon';
function Header (props) {
    const hasBack = false;
    return (
        <div className={styles.header}>
            {hasBack && <i className={`${styles.icon} ${styles.back}`} >&lt;</i>}
            <h3 className={styles.title}>微信</h3>
            <input style={{ display: 'none' }} className={styles.input} placeholder="搜索" />
            <div className={styles.headerRight}>
                <Icon type="iconbtn-search"/>
                <Icon type="iconadd"/>
                {/* <Icon type="iconbtn-search"/> */}
            </div>
        </div>
    );
}

export default Header;