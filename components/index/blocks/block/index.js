import css from './style.css';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ArrowIcon from './arrow';

function Block({ caption, children, isBig, color, list }) {
    let className = cn(css.block, {
        [css.big]: isBig,
        [css.small]: !isBig,
        [css.listTop]: list === 'top',
        [css.listBottom]: list === 'bottom',
    });
    let style = {
        backgroundColor: color,
    };
    return (
        <div className={className} style={style}>
            <div className={css.top}>
                <div className={css.caption}>{caption}</div>
                <div className={css.arrow}>
                    <ArrowIcon color={ isBig ? '#F10B0E' : 'white' } />
                </div>
            </div>
            {children}
        </div>
    );
}

Block.propTypes = {
    list: PropTypes.oneOf(['top', 'bottom']),
    caption: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isBig: PropTypes.bool,
    color: PropTypes.string.isRequired,
};

export default React.memo(Block);
