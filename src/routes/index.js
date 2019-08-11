import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from "react-router-config";

import Header from '@/components/Header';
import Menu from '@/views/Menu';
import Footer from '@/components/Footer';
import config from './config';
import styles from './styles.module.css';

function Router (props) {
    const current = matchRoutes(config, props.location.pathname);

    function handleSend (text) {
        console.log(text)
    }

    return (
        <div className={styles.wrapper}>
            <div >
                <Header />
            </div>
            <div className={styles.content}>
                <Switch>
                    {renderRoutes(config)}
                </Switch>
            </div>
            {
                // 我的亲娘诶，这里怎么优化看起来才好看啊
                (
                    current.length &&
                    current[0].route.meta &&
                    current[0].route.meta.footer
                ) ?
                    <Footer onSend={handleSend} /> :
                    <Menu />
            }

        </div>
    );
}

export default withRouter(Router);