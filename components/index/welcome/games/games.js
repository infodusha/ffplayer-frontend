import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useSize } from 'react-hook-size';
import { useHasTouch } from 'hooks/useHasTouch';
import { Swiper } from 'lib/swiper';
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

function Games() {

    let ref = useRef();
    let [scroll, setScroll] = useState(0);
    let { width } = useSize(ref);

    let hasTouch = useHasTouch();

    useEffect(() => {
        let listWidth = ref.current ? ref.current.scrollWidth : null;
        if(!hasTouch || !listWidth || !width || width < document.body.offsetWidth)
            return () => {};
        let item = ref.current;
        let swiper = new Swiper(item, listWidth - width);
        swiper.addListener(setScroll);
        return () => swiper.removeListener();
    }, [hasTouch, width]);

    useLayoutEffect(() => {
        ref.current.scrollLeft = scroll;
    }, [scroll]);

    return (
        <div className={css.games} ref={ref}>
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

export default React.memo(Games);
