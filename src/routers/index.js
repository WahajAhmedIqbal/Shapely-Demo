import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeContainer, PageNotFoundContainer } from '@containers';

const Routers = () => {
    return (
        <Switch>
            <Route
            exact
            path='/'
            component={HomeContainer}
            />
            <Route
            exact
            path='/404'
            component={PageNotFoundContainer}
            />
            <Route
            exact
            path="/*"
            component={() => <Redirect to='/404'/>}
            />
            
        </Switch> 
    );
}

export default Routers;