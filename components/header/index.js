import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.css';
import Account from './account';
import Login from './login';
import Title from './title';
import { useMaxScroll } from 'hooks/useMaxScroll';

function Header({ back }) {
    let [isLoginned, setIsLoginned] = useState(false);
    let isScrolled = useMaxScroll(70);
    return (
        <nav className={cn(css.header, { [css.scrolled]: isScrolled })}>
            <Title back={back} />
            {isLoginned ? <Account balance={234} nickname={'Greg'} /> : <Login onClick={() => setIsLoginned(true)} />}
        </nav>
    );
}

Header.propTypes = {
    back: PropTypes.boolean,
};

export default React.memo(Header);
