import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import css from './style.css';
import PropTypes from 'prop-types';
import User from 'ui/user';
import Scroll from 'ui/scroll/scroll';
import { useSize } from 'react-hook-size';
import { useHasTouch } from 'hooks/useHasTouch';
import { Swiper } from 'lib/swiper';

function Roundlist({ users, selected }) {

    let ref = useRef();
    let [scroll, setScroll] = useState(0);
    let { width } = useSize(ref);

    let listWidth = ref.current ? ref.current.scrollWidth : null;

    let hasTouch = useHasTouch();

    useEffect(() => {
        if(!hasTouch || !listWidth || !width)
            return () => {};
        let item = ref.current;
        let swiper = new Swiper(item, listWidth - width);
        swiper.addListener(setScroll);
        return () => swiper.removeListener();
    }, [hasTouch, listWidth, width]);

    useLayoutEffect(() => {
        ref.current.scrollLeft = scroll;
    }, [scroll]);

    function renderScroll() {
        if(hasTouch)
            return null;
        let isVisible = listWidth !== null && width !== null && width <= listWidth;
        if(!isVisible)
            return <div className={css.scroll}></div>;
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
                        selected={user.id === selected}
                        pic={user.pic}
                        name={user.name}
                        nickname={user.nickname}
                        rating={user.rating}
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
    })).isRequired,
    selected: ID,
};

export default React.memo(Roundlist);
