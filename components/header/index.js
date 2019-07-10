import { useState } from 'react';
import css from './style.css';
import Profile from './profile';
import Login from './login';
import Title from './title';

function Header() {
    let [isLoginned, setIsLoginned] = useState(false);
    return (
        <nav className={css.header}>
            <Title />
            {isLoginned ? <Profile balance={234} nickname={'Greg'} /> : <Login onClick={() => setIsLoginned(true)} />}
        </nav>
    );
}

export default React.memo(Header);
