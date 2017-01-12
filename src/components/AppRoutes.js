'use strict';

import React from 'react';
import {
    browserHistory,
    Router,
} from 'react-router';

import routes from '../routes';

class AppRoutes extends React.Component {
    render() {
        return (
            <Router
                history={browserHistory}
                onUpdate={() => window.scrollTo(0,0)}
                routes={routes}
            />
        );
    }
}

export default AppRoutes;
