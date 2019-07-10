import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import Link from 'next/link';
import gamesIcon from './games.svg';
import marketIcon from './market.svg';
import chatIcon from './chat.svg';
import profileIcon from './profile.svg';

const items = [
    { key: 'games', caption: 'Игры', href: '/', icon: gamesIcon },
    { key: 'store', caption: 'Маркет', href: '/store', icon: marketIcon },
    { key: 'chat', caption: 'Чат', href: '/chat', icon: chatIcon },
    { key: 'profile', caption: 'Профиль', href: '/profile', icon: profileIcon },
];

function Nav({ selected }) {
    return (
        <ul className={css.items}>
            {items.map((item) => (
                <li key={item.key} className={cn(css.item, { [css.selected]: selected === item.key })}>
                    <Link href={item.href}>
                        <a className={css.link}>{item.caption}</a>
                    </Link>
                    <Link href={item.href}>
                        <img className={css.icon} src={item.icon} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

Nav.propTypes = {
    selected: PropTypes.string,
};

export default Nav;
