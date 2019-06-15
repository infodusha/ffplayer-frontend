import Head from 'next/head';
import PropTypes from 'prop-types';
import css from './style.css';
import 'normalize.css';
import './global.css';

function Page({ title, children }) {
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            </Head>
            <div className={css.showBar}>
                {children}
            </div>
        </React.Fragment>
    );
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default React.memo(Page);
