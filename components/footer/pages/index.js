import css from './style.css';
import Link from 'next/link';
import PropTypes from 'prop-types';

function Pages({ items }) {
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

Pages.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    })).isRequired,
};

export default React.memo(Pages);
