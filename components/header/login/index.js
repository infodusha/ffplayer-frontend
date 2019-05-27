import PropTypes from 'prop-types';
import cn from 'classnames';
import { useMaxScroll } from '../useMaxScroll';
import css from './style.css';
import ButtonFilled from 'ui/buttons/filled';

function Login({ ...userProps }) {
    let isScrolled = useMaxScroll(70);
    let className = cn(css.loginButton, { [css.scrolled]: isScrolled });
    return (
        <div className={css.login}>
            <ButtonFilled {...userProps} className={className} caption="Войти" />
        </div>
    );
}

Login.propTypes = {
    className: PropTypes.string,
};

export default React.memo(Login);
