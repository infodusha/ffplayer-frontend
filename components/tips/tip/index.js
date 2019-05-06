import PropTypes from 'prop-types';
import css from './style.css';

function Tip({ color, caption, icon: Icon }) {
    return (
        <div className={css.tip} style={{ color }}>
            <Icon color={color} />
            <span className={css.caption}>{caption}</span>
        </div>
    );
}

Tip.propTypes = {
    color: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

export default React.memo(Tip);
