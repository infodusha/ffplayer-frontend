import { useReducer } from 'react';
import { Context, reducer, initialState } from 'store';
import Head from 'next/head';
import { useRouteSpy } from 'lib/routeSpy';
import PropTypes from 'prop-types';
import 'normalize.css';
import './global.css';

function Page({ title, children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useRouteSpy();
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            </Head>
            <Context.Provider value={{state, dispatch}}>
                {children}
            </Context.Provider>
        </React.Fragment>
    );
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default React.memo(Page);
