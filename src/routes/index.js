import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from "react-router-config";

import Header from '@/components/Header';
import Menu from '@/views/Menu';
import Footer from '@/components/Footer';
import config from './config';
import styles from './styles.module.css';

import ws from '@/services/websocket';

function Router (props) {
    const current = matchRoutes(config, props.location.pathname);
    const metaInfo = current.length && current[0].route.meta;

    function handleBack () {
        props.history.goBack();
    }

    function handleSend (text) {
        console.log(text)
        ws.send(text)
    }

    return (
        <div className={styles.wrapper}>
            <div >
                <Header hasBack={metaInfo && metaInfo.hasBack} onBack={handleBack} />
            </div>
            <div className={styles.content}>
                <Switch>
                    {renderRoutes(config)}
                </Switch>
            </div>
            {
                // 我的亲娘诶，这里怎么优化看起来才好看啊
                (
                    metaInfo &&
                    metaInfo.footer
                ) ?
                    <Footer onSend={handleSend} /> :
                    <Menu current={current[0].route.path} />
            }

        </div>
    );
}

export default withRouter(Router);