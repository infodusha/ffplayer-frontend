import css from './style.css';
import ButtonFilled from 'ui/buttons/filled';

function Login({ ...userProps }) {
    return (
        <div className={css.login}>
            <ButtonFilled {...userProps} className={css.loginButton} caption="Войти" />
        </div>
    );
}

export default React.memo(Login);
