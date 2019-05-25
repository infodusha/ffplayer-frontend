import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import css from './style.css';
import PropTypes from 'prop-types';
import User, { userWidth } from 'ui/user';
import Scroll from 'ui/scroll/scroll';
import { useSize } from 'react-hook-size';
import { useHasTouch } from 'hooks/useHasTouch';
import { Swiper } from 'lib/swiper';

function Roundlist({ users }) {

    let ref = useRef();
    let [scroll, setScroll] = useState(0);
    let { width } = useSize(ref);

    let listWidth = users.length * userWidth;

    let hasTouch = useHasTouch();

    useEffect(() => {
        setScroll(0);
    }, [users]);


    useEffect(() => {
        if(!hasTouch || !width)
            return;
        let item = ref.current;
        let swiper = new Swiper(item, listWidth - width);
        swiper.addListener(setScroll);
        return () => swiper.removeListener();
    }, [hasTouch, listWidth, width]);

    useLayoutEffect(() => {
        ref.current.scrollLeft = scroll;
    }, [scroll]);

    function renderScroll() {
        let isVisible = width !== null && Math.round(width) <= listWidth;
        if(hasTouch || !isVisible)
            return null;
        return (
            <div className={css.scroll}>
                <Scroll onChange={setScroll} value={scroll} length={listWidth - width} />
            </div>
        );
    }

    return (
        <React.Fragment>
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
            </div>
            {renderScroll()}
        </React.Fragment>
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
        rank: PropTypes.oneOf(['top', 'expert', 'master']),
        streamer: PropTypes.bool,
    })).isRequired,
};

export default React.memo(Roundlist);
