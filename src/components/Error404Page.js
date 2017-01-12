'use strict';

import React from 'react';
import {
    Link,
} from 'react-router';

class Error404Page extends React.Component {
    render() {
        return (
            <div className="error-page">
                <h1>Oh Snap!</h1>

                <h6>Error: 404</h6>

                <p>That page is not found</p>
            </div>
        );
    }
}

export default Error404Page;
