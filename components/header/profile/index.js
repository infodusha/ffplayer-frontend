import PropTypes from 'prop-types';
import css from './style.css';

function Profile({ balance, nickname }) {
    return (
        <div className={css.profile}>
            <span className={css.balance}>₽ {balance}</span>
            <div className={css.info}>
                <span className={css.nickname}>{nickname}</span>
                <div className={css.profileIcon}>
                    <div className={css.profileOnline} />
                </div>
            </div>
        </div>
    );

}

Profile.propTypes = {
    balance: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
};

export default React.memo(Profile);
