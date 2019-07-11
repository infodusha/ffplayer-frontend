import PropTypes from 'prop-types';
import css from './style.css';
import Link from 'next/link';
import Back from './back';

function Title({ back = false }) {
    return (
        <div className={css.title}>
            {back ? <Back /> : <Link href="/"><div className={css.logo} /></Link>}
            <div className={css.burger}>
                <div className={css.burgerIcon} />
            </div>
        </div>
    );
}

Title.propTypes = {
    back: PropTypes.boolean,
};

export default Title;
