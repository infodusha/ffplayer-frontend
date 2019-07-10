import css from './style.css';
import Link from 'next/link';

function Title() {
    return (
        <div className={css.title}>
            <Link href="/">
                <div className={css.logo}></div>
            </Link>
            <div className={css.burger}>
                <div className={css.burgerIcon} />
            </div>
        </div>
    );
}

export default Title;
