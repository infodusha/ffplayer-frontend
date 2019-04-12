import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';

function User({ selected, pic, name, nickname, onClick }) {
    let className = cn(css.user, { [css.selected]: selected });
    let style = { backgroundImage: `url(${pic})` };
    return (
        <div className={className} onClick={onClick}>
            <i style={style}></i>
            <div className={css.info}>
                <span>{name}</span>
                <span>@{nickname}</span>
            </div>
        </div>
    );
}

User.defaultProps = {
    selected: false,
};

User.propTypes = {
    selected: PropTypes.bool,
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string,
    onClick: PropTypes.func,
};

export default React.memo(User);
