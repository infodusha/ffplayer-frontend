import Page from 'components/page';
import Content from 'components/content';
import Header from 'components/header';
import Welcome from 'components/index/welcome';
import Trainers from 'components/index/trainers';
import Blocks from 'components/index/blocks';
import Info from 'components/index/info';
import Footer from 'components/footer';

function Index() {
    return (
        <Page title="FPP">
            <Header />
            <Content>
                <Welcome />
                <Trainers />
                <Blocks />
                <Info />
                <Footer />
            </Content>
        </Page>
    );
}

export default Index;
