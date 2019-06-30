import PropTypes from 'prop-types';
import css from './style.css';
import Games from './games';
import Utp from './utp';
import Info from './info';
import Router from 'next/router';
import { getPrevious } from 'lib/routeSpy';
import ArrowIcon from './arrow';

function Banner({ selected, mainImage, mobileImage, logoImage }) {

    let styleMain = { backgroundImage: `url(${mainImage})` };
    let mStyleMobile = { backgroundImage: `url(${mobileImage})` };
    let styleLogo = { backgroundImage: `url(${logoImage})` };

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
            <Games selected={selected} />
            <Utp />
            <Info />
        </div>
    );
}

Banner.propTypes = {
    selected: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    mobileImage: PropTypes.string.isRequired,
    logoImage: PropTypes.string.isRequired,
};

export default Banner;
