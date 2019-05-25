import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './style.css';
import colors from 'ui/colors.css';

function Tip({ width, caption, icon: Icon }) {

    let [selected, setSelected] = useState(false);

    function handleMouseEnter() {
        setSelected(true);
    }

    function handleMouseLeave() {
        setSelected(false);
    }

    let color = selected ? colors.tipHoverBg : colors.tipBg;

    return (
        <div className={css.tip} style={{ color, width }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Icon color={color} />
            <span className={css.caption}>{caption}</span>
        </div>
    );
}

Tip.propTypes = {
    caption: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    width: PropTypes.number.isRequired,
};

export default React.memo(Tip);
