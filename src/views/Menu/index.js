import React, { useState } from 'react';
import {withRouter } from 'react-router-dom';
import styles from './styles.module.css'
function Menu (props) {
    const menuList = [{
        url: '/chat/list',
        name: '微信',
    }, {
        url: '/address/list',
        name: '通讯录',
    }, {
        url: '/found',
        name: '发现',
    }, {
        url: '/me',
        name: '我',
    }];
    const [current, setCurrent] = useState('/chat/list');
    function handleClick (item) {
        setCurrent(item.url);
        props.history.push(item.url);
    }
    return (
        <div >
            <ul className={styles.menu}>
                {menuList.map(item => <li className={item.url === current ? styles.active : ''} key={item.url} onClick={() => handleClick(item)}>{item.name}</li>)}
            </ul>
        </div>
    );
}

export default withRouter(Menu);