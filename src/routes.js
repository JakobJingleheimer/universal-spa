'use strict';

import React from 'react';
import {
    IndexRoute,
    Route,
} from 'react-router';

import Error404Page from './components/Error404Page';
import IndexPage from './components/IndexPage';
import Layout from './components/Layout';
import TeamMemberPage from './components/TeamMemberPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="team-members/:name" component={TeamMemberPage}/>
        <Route path="*" component={Error404Page}/>
    </Route>
);

export default routes;
