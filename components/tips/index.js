import PropTypes from 'prop-types';
import css from './style.css';
import Tip from './tip';
import oneIcon from './icons/one';
import twoIcon from './icons/two';
import threeIcon from './icons/three';
import fourIcon from './icons/four';
import fiveIcon from './icons/five';

const tips = [
    { key: 'one', caption: '№1 Сервис по тренировкам и обучению играм', icon: oneIcon },
    { key: 'two', caption: 'Своя цена: предлагай свою цену за тренировку', icon: twoIcon },
    { key: 'three', caption: 'Общайся с тренером и следи за своим прогрессом', icon: threeIcon },
    { key: 'four', caption: 'Заходи в Маркет, тебя ожидают множество полезностей', icon: fourIcon },
    { key: 'five', caption: 'Live Chat смотри и комментируй совместные трансляции', icon: fiveIcon },
];

function Tips({ color }) {
    return (
        <div className={css.tips}>
            {tips.map((tip) => (
                <Tip
                    key={tip.key}
                    caption={tip.caption}
                    icon={tip.icon}
                    color={color}
                />
            ))}
        </div>
    );
}

Tips.propTypes = {
    color: PropTypes.string.isRequired,
};

export default React.memo(Tips);
