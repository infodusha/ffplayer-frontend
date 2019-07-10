import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import Link from 'next/link';

const items = [
    { key: 'games', caption: 'Игры', href: '#' },
    { key: 'store', caption: 'Маркет', href: '#' },
    { key: 'chat', caption: 'Чат', href: '#' },
];

function Nav({ selected }) {
    return (
        <ul className={css.items}>
            {items.map((item) => (
                <li key={item.key} className={cn(css.item, { [css.selected]: selected === item.key })}>
                    <Link href={item.href}>
                        <a>{item.caption}</a>
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
