import Page from 'components/page';
import Header from 'components/header';
import Welcome from 'components/index/welcome';
import Tips from 'components/tips';
import Footer from 'components/footer';

function Index() {
    return (
        <Page title="FPP">
            <Header />
            <Welcome />
            <Tips color="rgba(255, 255, 255, 0.2)" />
            <Footer />
        </Page>
    );
}

export default Index;
