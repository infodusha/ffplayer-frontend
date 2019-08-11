import PropTypes from 'prop-types';
import css from './style.css';

function Burger({ name, balance, pic, onClose }) {
    return (
        <div className={css.burger}>
            <div className={css.blocker} onClick={onClose}></div>
            <div className={css.data}>
                <div className={css.info}>
                    <img src={pic} />
                    <button className={css.close} onClick={onClose}></button>
                </div>
                <h4>Привет, {name}</h4>
                <div className={css.line} />
                <ul className={css.menu}>
                    <li className={css.item}>Ваш аккаунт</li>
                    <li className={css.item}>Финансы<span className={css.balance}>{balance}р</span></li>
                    <li className={css.item}>Уведомления</li>
                    <li className={css.item}>Избранные</li>
                    <li className={css.item}>Товары</li>
                </ul>
                <div className={css.line} />
                <div className={css.signout}>Выход</div>
                <div className={css.line} />
                <div>
                    <a>Условия</a>
                    <span>·</span>
                    <a>Конфиденциальность</a>
                </div>
            </div>
        </div>
    );
}

Burger.propTypes = {

};

export default React.memo(Burger);
