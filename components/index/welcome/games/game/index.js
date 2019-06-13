import { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import Caption from './caption';
import { useHovered } from 'hooks/useHovered';


function Game({ image, caption }) {

    let ref = useRef();
    let hovered = useHovered(ref);

    let imageStyle = { backgroundImage: `url(${image})` };
    return (
        <div className={css.game} ref={ref}>
            <div className={css.image} style={imageStyle}>
                <div className={cn(css.innerCaption, { [css.selected]: hovered })}>
                    <Caption caption={caption} hovered={hovered} />
                </div>
            </div>
            <div className={cn(css.caption, { [css.selected]: hovered })}>
                <Caption caption={caption} hovered={hovered} />
            </div>
        </div>
    );
}

Game.propTypes = {
    image: PropTypes.elementType.isRequired,
    caption: PropTypes.string.isRequired,
};

export default Game;
