import Page from 'components/page';
import Content from 'components/content';
import Header from 'components/header';
import Banner from 'components/game/banner';
import More from 'components/game/more';
import Trainers from 'components/index/trainers';
import Footer from 'components/footer';
import Nav from 'components/nav';

function FRTN() {
    return (
        <Page title="Fortnite | FPP">
            <Header />
            <Content>
                <Banner game="frtn" />
                <More />
                <Trainers />
                <Footer />
            </Content>
            <Nav bottom />
        </Page>
    );
}

export default FRTN;
