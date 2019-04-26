import PropTypes from 'prop-types';

function StreamerIcon({ color }) {
    return (
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.318 0.625273C14.0418 0.800062 14.6126 1.31171 14.8074 1.96081C15.1695 3.14641 15.1555 5.61773 15.1555 5.61773C15.1555 5.61773 15.1555 8.07645 14.8076 9.26217C14.6126 9.91115 14.042 10.4229 13.318 10.5976C11.9956 10.9097 7.57777 10.9097 7.57777 10.9097C7.57777 10.9097 3.17374 10.9097 1.83751 10.5852C1.11357 10.4104 0.542924 9.89867 0.347982 9.24968C0 8.07645 0 5.60525 0 5.60525C0 5.60525 0 3.14641 0.347982 1.96081C0.542795 1.31183 1.12749 0.787577 1.83738 0.612904C3.15982 0.300781 7.57764 0.300781 7.57764 0.300781C7.57764 0.300781 11.9956 0.300781 13.318 0.625273ZM10.1893 5.60455L5.8877 7.83801V3.37109L10.1893 5.60455Z" fill={color} />
        </svg>
    );
}

StreamerIcon.propTypes = {
    color: PropTypes.string.isRequired,
};

export default React.memo(StreamerIcon);
