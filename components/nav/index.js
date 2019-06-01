import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import Link from 'next/link';
import { useMaxScroll } from 'hooks/useMaxScroll';

const items = [
    { key: 'games', caption: 'Игры', href: '#' },
    { key: 'store', caption: 'Маркет', href: '#' },
    { key: 'chat', caption: 'Чат', href: '#' },
];

function Nav({ selected }) {
    let isScrolled = useMaxScroll(70);
    let className = cn(css.items, { [css.scrolled]: isScrolled });
    return (
        <ul className={className}>
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
};

export default React.memo(Nav);
