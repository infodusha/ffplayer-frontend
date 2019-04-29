import css from './style.css';
import Game from './game';
import wotbImage from './wotb.png';
import frtnImage from './frtn.png';
import pubgImage from './pubg.png';

const games = [
    { key: 'wotb', caption: 'World of Tanks Blitz', image: wotbImage },
    { key: 'frtn', caption: 'Fortnite', image: frtnImage },
    { key: 'pubg', caption: 'PUBG Mobail', image: pubgImage },
];

function Welcome() {
    return (
        <div className={css.welcome}>
            <div className={css.text}>
                <span className={css.line}>Feel like the First Player - Учим побеждать в онлайн играх</span>
                <span className={css.subline}>Тренируйтесь, общайтесь, смотрите трансляции!</span>
            </div>
            <div className={css.select}>
                Выбери игру для <span className={css.train}>Тренировки</span>
            </div>
            <div className={css.games}>
                {games.map((game) => (
                    <Game
                        key={game.key}
                        caption={game.caption}
                        image={game.image}
                        selected={game.key === 'wotb'}
                    />
                ))}
            </div>
        </div>
    );
}

export default React.memo(Welcome);
