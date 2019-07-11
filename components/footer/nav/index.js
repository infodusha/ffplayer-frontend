import css from './style.css';
import Link from 'next/link';

const items = [
    { key: 'games', caption: 'Игры', href: '/ind' },
    { key: 'store', caption: 'Маркет', href: '/market' },
    { key: 'chat', caption: 'Чат', href: '/chat' },
];

function Nav() {
    return (
        <ul className={css.items}>
            {items.map((item) => (
                <li key={item.key} className={css.item}>
                    <Link href={item.href}>
                        <a>{item.caption}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Nav;
