import Page from 'components/page';
import PropTypes from 'prop-types';

function Unknown({ statusCode }) {
    return (
        <Page title="FPP">
            An error {statusCode} occurred on server
        </Page>
    );
}

Unknown.propTypes = {
    statusCode: PropTypes.number.isRequired,
};

export default Unknown;
