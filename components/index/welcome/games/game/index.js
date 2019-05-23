import { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import ArrowIcon from './arrow';

function Game({ image, caption }) {

    let [selected, setSelected] = useState(false);

    function handleMouseEnter() {
        setSelected(true);
    }

    function handleMouseLeave() {
        setSelected(false);
    }

    let imageStyle = { backgroundImage: `url(${image})` };
    return (
        <div className={css.game} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={css.image} style={imageStyle}></div>
            <div className={cn(css.caption, { [css.selected]: selected })}>
                {caption}
                <div className={css.arrow}>
                    <ArrowIcon className={css.arrow} color={selected ? '#F3CE44' : '#ffffff'} />
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
