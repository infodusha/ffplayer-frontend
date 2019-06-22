import PropTypes from 'prop-types';
import css from './style.css';
import Games from './games';
import Utp from './utp';
import Info from './info';
import WotbImage from './wotb.jpg';

function getImageForGame(game) {
    switch(game) {
        case 'wotb': return WotbImage;
    }
}

function Banner({ game }) {
    let style = { backgroundImage: `url(${getImageForGame(game)})` };
    return (
        <div className={css.banner} style={style}>
            <Games selected={game} />
            <Utp />
            <Info />
        </div>
    );
}

Banner.propTypes = {
    game: PropTypes.string.isRequired,
};

export default Banner;
