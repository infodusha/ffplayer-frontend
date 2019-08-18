import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './style.css';
import Modal from 'ui/modal';
import Burger from 'components/burger';
import sampleIcon from './sample.png';

function Account({ balance, nickname }) {

    let [burger, setBurger] = useState(false);

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
            <div className={css.burger} onClick={() => setBurger(true)} />
            <Modal open={burger}>
                <Burger
                    name={'infodusha'}
                    balance={100}
                    icon={sampleIcon}
                    onClose={() => setBurger(false)}
                />
            </Modal>
        </React.Fragment>
    );

}

Account.propTypes = {
    balance: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
};

export default Account;
