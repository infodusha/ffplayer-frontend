import PropTypes from 'prop-types';
import css from './style.css';

function Account({ balance, nickname }) {
    return (
        <React.Fragment>
            <div className={css.account}>
                <span className={css.balance}>₽ {balance}</span>
                <div className={css.info}>
                    <span className={css.nickname}>{nickname}</span>
                    <div className={css.accountIcon}>
                        <div className={css.accountOnline} />
                    </div>
                </div>
            </div>
            <div className={css.burger} />
        </React.Fragment>
    );

}

Account.propTypes = {
    balance: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
};

export default Account;
