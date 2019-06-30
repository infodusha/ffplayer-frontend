import { useRef, useEffect } from 'react';
import css from './style.css';
import PropTypes from 'prop-types';
import User from 'ui/user';

function Roundlist({ users, emptyCaption }) {

    let ref = useRef();

    useEffect(() => {
        ref.current.scrollLeft = 0;
    }, [users]);

    function renderEmpty() {
        if(users.length !== 0)
            return null;
        return (
            <div className={css.empty}>
                {emptyCaption.split('|').map((caption) => (
                    <div key={caption}>{caption}</div>
                ))}
            </div>
        );
    }

    return (
        <div className={css.roundlist} ref={ref}>
            {users.map((user) => (
                <User
                    key={user.id}
                    pic={user.pic}
                    name={user.name}
                    nickname={user.nickname}
                    rating={user.rating}
                    rank={user.rank}
                    streamer={user.streamer}
                />
            ))}
            {renderEmpty()}
        </div>
    );
}

const ID = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

Roundlist.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: ID.isRequired,
        pic: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        rank: PropTypes.oneOf(['top', 'expert', 'master']).isRequired,
        streamer: PropTypes.bool,
    })).isRequired,
    emptyCaption: PropTypes.string.isRequired,
};

export default React.memo(Roundlist);
