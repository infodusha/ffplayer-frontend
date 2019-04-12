import PropTypes from 'prop-types';

function Err({ statusCode }) {
    let message = statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client';
    return (
        <p>{message}</p>
    );
}

Err.propTypes = {
    statusCode: PropTypes.number,
};

Err.getInitialProps = ({ res, err }) => {
    let statusCode = res || err ? (res || err).statusCode : null;
    return { statusCode };
};

export default Err;
