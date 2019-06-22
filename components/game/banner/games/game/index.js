import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.css';

function Game({ caption, icon, selected }) {
    let style = { backgroundImage: `url(${icon})` };
    return (
        <div className={css.game}>
            <div className={css.data}>
                <div className={css.icon} style={style}></div>
                <div className={css.caption}>{caption}</div>
            </div>
            <div className={cn(css.selector, { [css.selected]: selected })} />
        </div>
    );
}

Game.propTypes = {
    caption: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    selected: PropTypes.bool,
};

export default Game;
