import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ChatList from '../views/ChatList'

function Router() {
    return (
        <HashRouter>
            <Route to="/" component={ChatList}/>  
        </HashRouter>
    );
}

export default Router;