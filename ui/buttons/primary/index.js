import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';

function ButtonPrimary({ caption, className: userClassName, ...userProps }) {
    let className = cn(css.button, userClassName);
    return (
        <button {...userProps} className={className}>{caption}</button>
    );
}

ButtonPrimary.propTypes = {
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default React.memo(ButtonPrimary);
