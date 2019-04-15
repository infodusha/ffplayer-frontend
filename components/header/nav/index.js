import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import Link from 'next/link';

const items = [
    { key: 'games', caption: 'Игры', href: '#' },
    { key: 'store', caption: 'Магазин', href: '#' },
    { key: 'chat', caption: 'Чат', href: '#' },
];

function Nav({ selected }) {
    const menu = items.map((item) => {
        const className = cn(css.item, { [css.active]: selected === item.key });
        return (
            <li key={item.key} className={className}>
                <Link href={item.href}>
                    <a>{item.caption}</a>
                </Link>
            </li>
        );
    });
    return (
        <ul className={css.items}>
            {menu}
        </ul>
    );
}

Nav.propTypes = {
    selected: PropTypes.string,
};

export default React.memo(Nav);
