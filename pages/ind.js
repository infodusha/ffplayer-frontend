import Page from 'components/page';
import Header from 'components/header';
import Welcome from 'components/index/welcome';
import Trainers from 'components/index/trainers';
import Info from 'components/index/info';
import Footer from 'components/footer';

function Index() {
    return (
        <Page title="FPP">
            <Header />
            <Welcome />
            <Trainers />
            <Info />
            <Footer />
        </Page>
    );
}

export default Index;
