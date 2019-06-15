import css from './style.css';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

function Title({ scrolled }) {
    return (
        <div className={cn(css.title, { [css.scrolled]: scrolled })}>
            <Link href="/">
                <div className={css.logo}></div>
            </Link>
            <div className={css.burger}>
                <div className={css.burgerIcon} />
            </div>
        </div>
    );
}

Title.propTypes = {
    scrolled: PropTypes.bool.isRequired,
};

export default Title;
