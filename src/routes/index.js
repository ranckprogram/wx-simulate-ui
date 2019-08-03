import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '@/components/Header';
import ChatList from '@/views/ChatList';
import Menu from '@/views/Menu';
import styles from './styles.module.css';

function Router () {
    return (<HashRouter>

        <div className={styles.wrapper}>
            <div >
                <Header />
            </div>
            <div className={styles.content}>
                <Switch>
                    <Route to="/" exact component={ChatList} />
                    <Route to="/main" component={Menu} />
                </Switch>
            </div>
            <Menu />
        </div>                </HashRouter>

    );
}

export default Router;