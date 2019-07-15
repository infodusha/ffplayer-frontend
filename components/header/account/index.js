import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './style.css';
import Burger from 'ui/burger'; // TODO: move to page

function Account({ balance, nickname }) {

    let [opened, setOpened] = useState(false);

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
            <div className={css.burger} onClick={() => setOpened(true)} />
            <Burger open={opened} onClose={() => setOpened.bind(false)} />
        </React.Fragment>
    );

}

Account.propTypes = {
    balance: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
};

export default Account;
