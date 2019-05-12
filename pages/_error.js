import PropTypes from 'prop-types';
import NotFound from 'components/errors/not_found';
import Unknown from 'components/errors/unknown';
import Client from 'components/errors/client';

function Error_({ statusCode }) {
    if(!statusCode)
        return <Client />;
    switch(statusCode) {
        case 404:
            return <NotFound />;
        default:
            return <Unknown statusCode={statusCode} />;
    }
}

Error_.propTypes = {
    statusCode: PropTypes.number,
};

Error_.getInitialProps = ({ res, err }) => {
    let statusCode = res || err ? (res || err).statusCode : null;
    return { statusCode };
};

export default Error_;
