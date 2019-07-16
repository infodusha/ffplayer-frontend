import React from 'react';
import Link from 'next/link';
import css from './style.css';
import wotbIcon from './wotb.png';
import frtnIcon from './frtn.png';
import pubgIcon from './pubg.png';

const games = [
    { key: 'wotb', caption: 'World of Tanks Blitz', icon: wotbIcon },
    { key: 'frtn', caption: 'Fortnite', icon: frtnIcon },
    { key: 'pubg', caption: 'PUBG Mobile', icon: pubgIcon },
];

function Games() {
    return (
        <div className={css.games}>
            <div className={css.data}>
                {games.map((game) => (
                    <Link key={game.key} href={game.key}>
                        <div className={css.game} style={{ backgroundImage: `url(${game.icon})` }}>
                            <div className={css.caption}>{game.caption}</div>
                            <div className={css.bg} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Games;
