import { useRef } from 'react';
import css from './style.css';
import PropTypes from 'prop-types';
import Game from './game';
import wotbIcon from './wotb.png';
import frtnIcon from './frtn.png';
import pubgIcon from './pubg.png';
import { useHovered } from 'hooks/useHovered';

const games = [
    { key: 'wotb', caption: 'World of Tanks Blitz', icon: wotbIcon },
    { key: 'frtn', caption: 'Fortnite', icon: frtnIcon },
    { key: 'pubg', caption: 'PUBG Mobile', icon: pubgIcon },
];

function Games({ selected }) {

    let ref = useRef();
    let hovered = useHovered(ref);

    return (
        <div className={css.games} ref={ref}>
            {games.map((game) => (
                <Game
                    key={game.key}
                    href={game.key}
                    caption={game.caption}
                    icon={game.icon}
                    selected={hovered ? false : selected === game.key}
                />
            ))}
        </div>
    );
}

Games.propTypes = {
    selected: PropTypes.string.isRequired,
};

export default Games;
