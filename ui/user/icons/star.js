import PropTypes from 'prop-types';

function StarIcon({ color }) {
    return (
        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 0L4.63149 1.94264L6.8287 2.41844L5.33078 4.09486L5.55725 6.33156L3.5 5.425L1.44275 6.33156L1.66922 4.09486L0.171302 2.41844L2.36851 1.94264L3.5 0Z" fill={color} />
        </svg>
    );
}

StarIcon.propTypes = {
    color: PropTypes.string.isRequired,
};

export default React.memo(StarIcon);
