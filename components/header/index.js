import { useState } from 'react';
import cn from 'classnames';
import css from './style.css';
import Profile from './profile';
import Nav from 'components/nav';
import Login from './login';
import Title from './title';
import { useMaxScroll } from 'hooks/useMaxScroll';

function Header() {
    let [isLoginned, setIsLoginned] = useState(false);
    let isScrolled = useMaxScroll(70);
    let className = cn(css.header, { [css.scrolled]: isScrolled });
    return (
        <nav className={className}>
            <Title />
            <Nav selected={'games'} />
            {isLoginned ? <Profile balance={234} nickname={'Greg'} /> : <Login onClick={() => setIsLoginned(true)} />}
        </nav>
    );
}

export default React.memo(Header);
