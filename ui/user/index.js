import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import StarIcon from './staricon';

function User({ selected, pic, name, nickname, rating, onClick }) {
    let className = cn(css.user, { [css.selected]: selected });
    let style = { backgroundImage: `url(${pic})` };
    return (
        <div className={className} onClick={onClick}>
            <i style={style}></i>
            <div className={css.info}>
                <span className={css.text}>{name}</span>
                <span className={css.text}>@{nickname}</span>
                <span className={css.rate}>
                    <StarIcon color={css.ratingColor} />
                    <span className={css.ratingValue}>{rating}</span>
                    <span className={css.rateText}>ffp</span>
                </span>
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
    nickname: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onClick: PropTypes.func,
};

export default React.memo(User);
