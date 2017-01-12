import path from 'path';
import {
    Server,
} from 'http';
import Express from 'express';
import React from 'react';
import {
    renderToString,
} from 'react-dom/server';
import {
    match,
    RouterContext,
} from 'react-router';

import routes from './routes';
import Error404Page from './components/Error404Page';

const app = new Express();
const srv = new Server(app);
const getHandler = (req, rsp) => {
    const matcher = (err, redirectLocation, renderProps) => {
        if (err)
            return rsp
                .status(500)
                .send(err.message);

        if (redirectLocation)
            return rsp
                .status(302)
                .send(redirectLocation.pathname + redirectLocation.search);

        let markup;

        if (renderProps) {
            markup = renderToString(<RouterContext {...renderProps}/>);
        }
        else {
            markup = renderToString();
            rsp.status(404);
        }

        return rsp
            .render('index', { markup });
    };

    match(
        {routes, location: req.url},
        matcher
    );
};
const reqHandler = (err) => {
    if (err)
        return console.error(err);

    console.info(`\tServer running in ${env} mode on http://localhost:${port}`);
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', getHandler);

const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || 'DEV';

srv.listen(port, reqHandler);
