import PropTypes from 'prop-types';
import cn from 'classnames';
import { useMaxScroll } from '../useMaxScroll';
import css from './style.css';

function Login({ className: userClassName, ...userProps }) {
    let isScrolled = useMaxScroll(70);
    let className = cn(css.loginButton, userClassName, { [css.scrolled]: isScrolled });
    return (
        <div className={css.login}>
            <button className={className} {...userProps}>Войти</button>
        </div>
    );
}

Login.propTypes = {
    className: PropTypes.string,
};

export default React.memo(Login);
