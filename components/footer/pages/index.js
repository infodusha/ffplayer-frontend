import css from './style.css';
import Link from 'next/link';

const items = [
    { key: 'news', caption: 'Новости', href: '#' },
    { key: 'trainer/become', caption: 'Стать Тренером', href: '#' },
    { key: 'trainer/find', caption: 'Найти Тренера', href: '#' },
    { key: 'streams', caption: 'Он-лайн стримы', href: '#' },
    { key: 'support', caption: 'Центр поддрежки', href: '#' },
    { key: 'partners', caption: 'Партнеры', href: '#' },
];

function Pages() {
    return (
        <ul className={css.pages}>
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

export default React.memo(Pages);
