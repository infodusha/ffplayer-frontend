import PropTypes from 'prop-types';

function StreamerIcon({ color }) {
    return (
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5405 2.19065C19.2834 1.33407 18.5302 0.658872 17.575 0.428213C15.8299 0 9.99978 0 9.99978 0C9.99978 0 4.16983 0 2.42469 0.41189C1.48789 0.642396 0.716296 1.33422 0.459212 2.19065C3.42859e-08 3.75522 0 7 0 7C0 7 3.42859e-08 10.2611 0.459212 11.8094C0.716466 12.6658 1.46951 13.3411 2.42486 13.5718C4.1882 14 9.99995 14 9.99995 14C9.99995 14 15.8299 14 17.575 13.5881C18.5304 13.3576 19.2834 12.6823 19.5407 11.8258C19.9999 10.2611 19.9999 7.01648 19.9999 7.01648C19.9999 7.01648 20.0183 3.75522 19.5405 2.19065Z" fill={color} />
            <path d="M7.77002 9.94552L13.4466 6.99815L7.77002 4.05078V9.94552Z" fill="white" />
        </svg>
    );
}

StreamerIcon.propTypes = {
    color: PropTypes.string.isRequired,
};

export default React.memo(StreamerIcon);