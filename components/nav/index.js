import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import Link from 'next/link';
import gamesIcon from './games.svg';
import marketIcon from './market.svg';
import chatIcon from './chat.svg';
import accountIcon from './account.svg';
import { useMaxScroll } from 'hooks/useMaxScroll';

const items = [
    { key: 'games', caption: 'Игры', href: '/', icon: gamesIcon },
    { key: 'store', caption: 'Маркет', href: '/market', icon: marketIcon },
    { key: 'chat', caption: 'Чат', href: '/chat', icon: chatIcon },
    { key: 'account', caption: 'Аккаунт', href: '/account', icon: accountIcon },
];

function Nav({ selected }) {
    let isScrolled = useMaxScroll(70);
    return (
        <ul className={cn(css.items, { [css.scrolled]: isScrolled })}>
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
