import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.css';
import Link from 'next/link';

function Game({ caption, href, icon, selected }) {
    let style = { backgroundImage: `url(${icon})` };
    return (
        <div className={css.game}>
            <Link href={href} prefetch>
                <div className={css.data}>
                    <div className={css.icon} style={style}></div>
                    <div className={cn(css.caption, { [css.selectedCaption]: selected })}>{caption}</div>
                </div>
            </Link>
            <div className={cn(css.selector, { [css.selectedSelector]: selected })} />
        </div>
    );
}

Game.propTypes = {
    caption: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    href: PropTypes.string.isRequired,
};

export default Game;
