import css from './style.css';
import Tip from './tip';
import oneIcon from './icons/one';
import twoIcon from './icons/two';
import threeIcon from './icons/three';
import fourIcon from './icons/four';
import fiveIcon from './icons/five';

const tips = [
    { key: 'one', caption: '№1 Сервис по тренировкам и обучению играм', icon: oneIcon, flex: 1 },
    { key: 'two', caption: 'Своя цена: предлагай свою цену за тренировку', icon: twoIcon, flex: 2 },
    { key: 'three', caption: 'Общайся с тренером и следи за своим прогрессом', icon: threeIcon, flex: 2 },
    { key: 'four', caption: 'Заходи в Маркет, тебя ожидают множество полезностей', icon: fourIcon, flex: 2 },
    { key: 'five', caption: 'Live Chat смотри и комментируй совместные трансляции', icon: fiveIcon, flex: 3 },
];

function Tips() {
    return (
        <div className={css.tips}>
            {tips.map((tip) => (
                <Tip
                    key={tip.key}
                    caption={tip.caption}
                    icon={tip.icon}
                    flex={tip.flex}
                />
            ))}
        </div>
    );
}

export default Tips;
