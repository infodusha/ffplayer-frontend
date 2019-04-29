import Page from 'components/page';
import Header from 'components/header';
import Welcome from 'components/index/welcome';
import Footer from 'components/footer';

function Index() {
    return (
        <Page title="FPP">
            <Header />
            <Welcome />
            <Footer />
        </Page>
    );
}

export default Index;
