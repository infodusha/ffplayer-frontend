import PropTypes from 'prop-types';
import css from './style.css';
import cn from 'classnames';

function Profile({ scrolled, balance, nickname }) {
    return (
        <div className={cn(css.profile, { [css.scrolled]: scrolled })}>
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
    scrolled: PropTypes.bool.isRequired,
    balance: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
};

export default Profile;
