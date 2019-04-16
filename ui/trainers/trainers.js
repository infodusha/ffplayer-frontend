import { useState, useRef, useLayoutEffect } from 'react';
import css from './style.css';
import PropTypes from 'prop-types';
import User from 'ui/user';
import Scroll from 'ui/scroll/scroll';
import { useSize } from 'react-hook-size';
import { useHasTouch } from 'hooks/useHasTouch';
import { useSwipeScroll } from './useSwipeScroll';

function Trainers({ users, selected }) {

    let ref = useRef();
    let [scroll, setScroll] = useState(0);
    let { width } = useSize(ref);

    let length = (ref.current ? ref.current.scrollWidth : 0) - width;

    let hasTouch = useHasTouch();

    useSwipeScroll({ hasTouch, ref, length, setScroll });

    useLayoutEffect(() => {
        ref.current.scrollLeft = scroll;
    }, [scroll]);

    let renderedUsers = users.map((user) => (
        <User
            key={user.id}
            selected={user.id === selected}
            pic={user.pic}
            name={user.name}
            nickname={user.nickname}
        />
    ));
    return (
        <React.Fragment>
            <div className={css.stories} ref={ref}>
                {renderedUsers}
            </div>
            { hasTouch ? null : <div className={css.scroll}>
                <Scroll onChange={setScroll} value={scroll} length={length} />
            </div> }
        </React.Fragment>
    );
}

const ID = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

Trainers.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: ID,
        pic: PropTypes.string,
        name: PropTypes.string,
        nickname: PropTypes.string,
    })),
    selected: ID,
};

export default React.memo(Trainers);
