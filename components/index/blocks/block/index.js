import css from './style.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Block({ caption, children, isBig, color }) {
    let className = cn(css.block, {
        [css.big]: isBig,
        [css.small]: !isBig,
    });
    let style = {
        backgroundColor: color,
    };
    return (
        <div className={className} style={style}>
            <div className={css.top}>
                <div className={css.caption}>{caption}</div>
                <div></div>
            </div>
            <div className={css.content}>{children}</div>
        </div>
    );
}

Block.propTypes = {
    caption: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isBig: PropTypes.bool,
    color: PropTypes.string.isRequired,
};

export default React.memo(Block);
