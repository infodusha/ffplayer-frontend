import { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import ArrowIcon from './arrow';
import colors from 'ui/colors.css';
import { useHovered } from 'hooks/useHovered';

function Game({ image, caption }) {

    let ref = useRef();
    let hovered = useHovered(ref);

    let imageStyle = { backgroundImage: `url(${image})` };
    return (
        <div className={css.game} ref={ref}>
            <div className={css.image} style={imageStyle} />
            <div className={cn(css.caption, { [css.selected]: hovered })}>
                {caption}
                <div className={css.arrow}>
                    <ArrowIcon color={hovered ? colors.primarySelect : colors.gameText} />
                </div>
            </div>
        </div>
    );
}

Game.propTypes = {
    image: PropTypes.elementType.isRequired,
    caption: PropTypes.string.isRequired,
};

export default React.memo(Game);
