'use strict';

import React from 'react';
import {
    Link,
} from 'react-router';

class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <div className="logo" />
                </header>

                <div id="app-content">
                    {this.props.children}
                </div>

                <footer>
                    Basic Universal React App
                </footer>
            </div>
        );
    }
}

export default Layout;
