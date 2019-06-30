import Page from 'components/page';
import Content from 'components/content';
import Header from 'components/header';
import Banner from 'components/game/banner';
import More from 'components/game/more';
import Trainers from 'components/index/trainers';
import Footer from 'components/footer';
import Nav from 'components/nav';
import mainImage from 'components/game/images/wotb/main.jpg';
import mobileImage from 'components/game/images/wotb/mobile.jpg';
import logoImage from 'components/game/images/wotb/logo.png';

function FRTN() {
    return (
        <Page title="Fortnite | FPP">
            <Header />
            <Content>
                <Banner selected="frtn" mainImage={mainImage} mobileImage={mobileImage} logoImage={logoImage} />
                <More />
                <Trainers />
                <Footer />
            </Content>
            <Nav bottom />
        </Page>
    );
}

export default FRTN;
