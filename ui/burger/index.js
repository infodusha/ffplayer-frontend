import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.css';

function Burger({ name, balance, icon, onClose: handleClose }) {
    let iconStyle = { backgroundImage: `url(${icon})` };
    return (
        <div className={css.burger}>
            <div className={css.blocker} onClick={handleClose}></div>
            <div className={css.data}>
                <div className={css.info}>
                    <div style={iconStyle} className={css.icon} />
                    <button className={css.close} onClick={handleClose}></button>
                </div>
                <span className={css.name}>Привет, {name}</span>
                <div className={css.line} />
                <ul className={css.menu}>
                    <li className={cn(css.item, css.accountIcon)}>Ваш аккаунт</li>
                    <li className={cn(css.item, css.financeIcon)}>Финансы<span className={css.balance}>{balance} р</span></li>
                    <li className={cn(css.item, css.notificationsIcon)}>Уведомления</li>
                    <li className={cn(css.item, css.favoritesIcon)}>Избранные</li>
                    <li className={cn(css.item, css.productsIcon)}>Товары</li>
                </ul>
                <div className={css.social}>
                    <div className={cn(css.socialIcon, css.socialIconFacebook)} />
                    <div className={cn(css.socialIcon, css.socialIconInstagram)} />
                    <div className={cn(css.socialIcon, css.socialIconVk)} />
                </div>
                <div className={css.line} />
                <div className={css.signout}>Выход</div>
                <div className={css.line} />
                <div className={css.links}>
                    <a>Условия</a>
                    <span className={css.dot}>·</span>
                    <a>Конфиденциальность</a>
                </div>
            </div>
        </div>
    );
}

Burger.propTypes = {
    name: PropTypes.string,
    balance: PropTypes.number,
    icon: PropTypes.string,
    onClose: PropTypes.func,
};

export default React.memo(Burger);
