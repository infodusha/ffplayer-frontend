import css from './style.css';
import Game from './game';
import wotbImage from './wotb.png';
import frtnImage from './frtn.png';
import pubgImage from './pubg.png';

const games = [
    { key: 'wotb', caption: 'World of Tanks Blitz', image: wotbImage },
    { key: 'frtn', caption: 'Fortnite', image: frtnImage },
    { key: 'pubg', caption: 'PUBG Mobile', image: pubgImage },
];

function Games() {
    return (
        <div className={css.games}>
            {games.map((game) => (
                <Game
                    key={game.key}
                    caption={game.caption}
                    image={game.image}
                />
            ))}
        </div>
    );
}

export default Games;
