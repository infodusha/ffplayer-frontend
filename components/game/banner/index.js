import PropTypes from 'prop-types';
import css from './style.css';
import Games from './games';
import Utp from './utp';
import Info from './info';
import Router from 'next/router';
import { getPrevious } from 'lib/routeSpy';
import WotbMain from '../images/wotb/main.jpg';
import WotbMobile from '../images/wotb/mobile.jpg';
import WotbLogo from '../images/wotb/logo.png';
import ArrowIcon from './arrow';

function getImagesForGame(game) {
    switch(game) {
        case 'wotb': return [WotbMain, WotbMobile, WotbLogo];
        case 'frtn': return [WotbMain, WotbMobile, WotbLogo];
    }
}

function Banner({ game }) {

    let images = getImagesForGame(game);

    let styleMain = { backgroundImage: `url(${images[0]})` };
    let mStyleMobile = { backgroundImage: `url(${images[1]})` };
    let styleLogo = { backgroundImage: `url(${images[2]})` };

    function goBack() {
        let url = getPrevious() || '/';
        Router.push(url);
    }

    return (
        <div className={css.banner} style={styleMain}>
            <div className={css.mImage} style={mStyleMobile}>
                <div className={css.back} onClick={goBack}>
                    <ArrowIcon />
                </div>
                <div className={css.logo} style={styleLogo}></div>
            </div>
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
