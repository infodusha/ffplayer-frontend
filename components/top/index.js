import { useState } from 'react';
import cn from 'classnames';
import Profile from './profile';
import Nav from './nav';
import css from './style.css';
import Login from './login';
import { useMaxScroll } from './useMaxScroll';

function Top() {
    let [isLoginned, setIsLoginned] = useState(false);
    let isScrolled = useMaxScroll(70);
    let className = cn(css.nav, { [css.scrolled]: isScrolled });
    return (
        <nav className={className}>
            <div className={css.menu}>
                <div className={css.burger}>
                    <i className={css.burgerIcon}></i>
                </div>
                <Nav selected={'games'} />
            </div>
            {isLoginned ? <Profile balance={234} nickname={'Greg'} /> : <Login onClick={() => setIsLoginned(true)} />}
        </nav>
    );
}

export default React.memo(Top);
