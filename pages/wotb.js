import Page from 'components/page';
import Content from 'components/content';
import Header from 'components/header';
import Banner from 'components/game/banner';
import More from 'components/game/more';
import Trainers from 'components/index/trainers';
import Footer from 'components/footer';
import Nav from 'components/nav';

function WOTB() {
    return (
        <Page title="World of Tanks Blitz | FPP">
            <Header />
            <Content>
                <Banner game="wotb" />
                <More />
                <Trainers />
                <Footer />
            </Content>
            <Nav bottom />
        </Page>
    );
}

export default WOTB;