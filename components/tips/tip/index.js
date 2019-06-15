import { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import colors from 'ui/colors.css';
import { useHovered } from 'hooks/useHovered';

function Tip({ flex, caption, icon: Icon }) {

    let ref = useRef();
    let hovered = useHovered(ref);

    let color = hovered ? colors.grey3 : colors.grey1;

    let className = cn(css.tip, {
        [css.flex1]: flex === 1,
        [css.flex2]: flex === 2,
        [css.flex3]: flex === 3,
    });

    return (
        <div className={className} style={{ color }} ref={ref}>
            <Icon color={color} />
            <span className={css.caption}>{caption}</span>
        </div>
    );
}

Tip.propTypes = {
    caption: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    flex: PropTypes.oneOf([1, 2, 3]).isRequired,
};

export default Tip;
