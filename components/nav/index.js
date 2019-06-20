import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import Link from 'next/link';

const items = [
    { key: 'games', caption: 'Игры', href: '#' },
    { key: 'store', caption: 'Маркет', href: '#' },
    { key: 'chat', caption: 'Чат', href: '#' },
];

function Nav({ selected, bottom = false }) {
    return (
        <ul className={cn(css.items, { [css.itemsBottom]: bottom })}>
            {items.map((item) => (
                <li key={item.key} className={cn(css.item, { [css.selected]: selected === item.key })}>
                    <Link href={item.href} prefetch>
                        <a>{item.caption}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

Nav.propTypes = {
    selected: PropTypes.string,
    bottom: PropTypes.bool,
};

export default Nav;
