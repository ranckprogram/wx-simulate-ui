import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '@/components/Header';
import Menu from '@/views/Menu';
import ChatList from '@/views/ChatList';
import AddressList from '@/views/AddressList';
import Found from '@/views/Found';
import Me from '@/views/Me';
import UserInfo from '@/views/UserInfo';
import Session from '@/views/Session';

import styles from './styles.module.css';

function Router () {
    return (
        <HashRouter>
            <div className={styles.wrapper}>
                <div >
                    <Header />
                </div>
                <div className={styles.content}>
                    <Switch>
                        <Route path="/chat/list" exact component={ChatList} />
                        <Route path="/address/list" component={AddressList} />
                        <Route path="/found" component={Found} />
                        <Route path="/me" component={Me} />
                        <Route path="/user/:id" component={UserInfo} />
                        <Route path="/session/:id" component={Session} />
                    </Switch>
                </div>
                <Menu />
            </div>
        </HashRouter>

    );
}

export default Router;