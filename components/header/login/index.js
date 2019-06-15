import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.css';
import ButtonFilled from 'ui/buttons/filled';

function Login({ scrolled, ...userProps }) {
    return (
        <div className={cn(css.login, { [css.scrolled]: scrolled })}>
            <ButtonFilled {...userProps} className={css.loginButton} caption="Войти" />
        </div>
    );
}

Login.propTypes = {
    scrolled: PropTypes.bool.isRequired,
};

export default React.memo(Login);
