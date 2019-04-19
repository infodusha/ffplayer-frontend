import Header from 'components/header';
import Footer from 'components/footer';
import Trainers from 'ui/trainers';
import pic from '../avatar.png';

let users = [
    { id: 1, pic, name: 'Андрей', nickname: 'infodusha' },
    { id: 2, pic, name: 'Егор', nickname: 'krid_bro' },
    { id: 3, pic, name: 'Олег', nickname: 'olegik' },
    { id: 4, pic, name: 'Миха', nickname: 'mixxx_x' },
    { id: 5, pic, name: 'Димас', nickname: 'dimdim94' },
    { id: 6, pic, name: 'Алексей', nickname: 'perfect_m1nd' },
    { id: 7, pic, name: 'Dan', nickname: 'gaeron' },
    { id: 8, pic, name: 'Оля', nickname: 'olly3' },
    { id: 9, pic, name: 'Илон Маск', nickname: 'teslanator' },
    { id: 10, pic, name: 'Банан', nickname: 'banyourself' },
    { id: 11, pic, name: 'Андрей9', nickname: 'infodusha' },
    { id: 12, pic, name: 'Андрей10', nickname: 'infodusha' },
    { id: 13, pic, name: 'Андрей11', nickname: 'infodusha' },
];

function Test() {
    return (
        <React.Fragment>
            <Header />
            <Trainers users={users} selected={3} />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </React.Fragment>
    );

}

Test.title = 'FFP';

export default Test;
