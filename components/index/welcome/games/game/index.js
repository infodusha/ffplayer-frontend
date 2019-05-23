import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import ArrowIcon from './arrow';

function Game({ selected, image, caption }) {
    let imageStyle = { backgroundImage: `url(${image})` };
    return (
        <div className={css.game}>
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
    selected: PropTypes.bool,
    image: PropTypes.elementType.isRequired,
    caption: PropTypes.string.isRequired,
};

export default React.memo(Game);
