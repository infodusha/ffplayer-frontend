import { useRef } from 'react';
import PropTypes from 'prop-types';
import css from './style.css';
import colors from 'ui/colors.css';
import { useHovered } from 'hooks/useHovered';

function Tip({ width, caption, icon: Icon }) {

    let ref = useRef();
    let hovered = useHovered(ref);

    let color = hovered ? colors.tipHoverBg : colors.tipBg;

    return (
        <div className={css.tip} style={{ color, width }} ref={ref}>
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
