import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ChatList from '../views/ChatList'

function Router () {
    return (
        <HashRouter>
            <Switch>
                <Route to="/" component={ChatList} />
            </Switch>
        </HashRouter>
    );
}

export default Router;