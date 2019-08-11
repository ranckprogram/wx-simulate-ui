import React from 'react';
import styles from './style.module.css'
import Icon from '@/components/Icon';
function Header (props) {
    const hasBack = props.hasBack || false;
    return (
        <div className={styles.header}>
            {hasBack && <Icon type="iconback" onClick={props.onBack} />}
            <h3 className={styles.title}>微信</h3>
            <input style={{ display: 'none' }} className={styles.input} placeholder="搜索" />
            <div className={styles.headerRight}>
                <Icon type="iconbtn-search" />
                <Icon type="iconadd" />
                {/* <Icon type="iconbtn-search"/> */}
            </div>
        </div>
    );
}

export default Header;