import { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import StarIcon from './icons/star';
import StreamerIcon from './icons/streamer';
import colors from 'ui/colors.css';
import { useHovered } from 'hooks/useHovered';
import { HEXtoRGBA } from 'lib/utils';

function getColor(rank) {
    let key = rank.slice(0, 1).toUpperCase() + rank.slice(1);
    return colors[`filter${key}`];
}

function User({ pic, name, nickname, rating, rank, streamer, onClick }) {

    let ref = useRef();
    let hovered = useHovered(ref);

    let className = cn(css.user, { [css.hovered]: hovered });
    let color = getColor(rank);
    let style = {
        backgroundImage: `url(${pic})`,
        borderColor: color,
        boxShadow: hovered ? `0px 10px 20px ${HEXtoRGBA(color, 0.30)}` : undefined,
    };

    function renderStreamer() {
        if(!streamer)
            return null;
        return (
            <div className={css.streamer}>
                <StreamerIcon color={colors.filterStreamer} />
            </div>
        );
    }

    return (
        <div className={className} onClick={onClick} ref={ref}>
            <div className={css.pic} style={style}>{renderStreamer()}</div>
            <div className={css.info}>
                <span className={css.text}>{name}</span>
                <span className={css.text}>@{nickname}</span>
                <span className={css.rate}>
                    <StarIcon color={colors.primary} />
                    <span className={css.ratingValue}>{rating}</span>
                    <span className={css.rateText}>ffp</span>
                </span>
            </div>
        </div>
    );
}

User.propTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    rank: PropTypes.oneOf(['top', 'expert', 'master']).isRequired,
    streamer: PropTypes.bool,
    onClick: PropTypes.func,
};

export default React.memo(User);
