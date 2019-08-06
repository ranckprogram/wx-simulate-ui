import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './styles.module.css'
import Icon from '@/components/Icon';

function Menu (props) {
    const menuList = [{
        url: '/chat/list',
        name: '微信',
        icon: 'iconchat',
    }, {
        url: '/address/list',
        name: '通讯录',
        icon: 'iconaddressbook',
    }, {
        url: '/found',
        name: '发现',
        icon: 'iconfind1',
    }, {
        url: '/me',
        name: '我',
        icon: 'iconme',
    }];
    const [current, setCurrent] = useState('/chat/list');
    function handleClick (item) {
        setCurrent(item.url);
        props.history.push(item.url);
    }
    return (
        <div >
            <ul className={styles.menu}>
                {menuList.map(item =>
                    <li className={item.url === current ? styles.active : ''} key={item.url}
                        onClick={() => handleClick(item)}>
                        <div>
                            <Icon type={item.icon} />
                        </div>
                        {item.name}
                    </li>)}
            </ul>
        </div>
    );
}

export default withRouter(Menu);