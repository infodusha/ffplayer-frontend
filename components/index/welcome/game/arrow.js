import PropTypes from 'prop-types';

function ArrowIcon({ color }) {
    return (
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.03516 1L6.07058 7.03542L1.03516 13.0708" stroke={color} strokeWidth="2" />
        </svg>
    );
}

ArrowIcon.propTypes = {
    color: PropTypes.string.isRequired,
};

export default React.memo(ArrowIcon);
