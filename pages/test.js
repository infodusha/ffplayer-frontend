import { useState } from 'react';
import Page from 'components/page';
import Header from 'components/header';
import Footer from 'components/footer';
import Roundlist from 'ui/roundlist';
import pic from '../avatar.png';
import Filters from 'components/filters';

let users = [
    { id: 1, pic, name: 'Андрей', nickname: 'infodusha', rating: 1.4, winrate: 1.2 },
    { id: 2, pic, name: 'Егор', nickname: 'krid_bro', rating: 1.4, winrate: 1.2 },
    { id: 3, pic, name: 'Олег', nickname: 'olegik', rating: 1.4, winrate: 1.2 },
    { id: 4, pic, name: 'Миха', nickname: 'mixxx_x', rating: 1.4, winrate: 1.2 },
    { id: 5, pic, name: 'Димас', nickname: 'dimdim94', rating: 1.4, winrate: 1.2 },
    { id: 6, pic, name: 'Алексей', nickname: 'perfect_m1nd', rating: 1.4, winrate: 1.2 },
    { id: 7, pic, name: 'Dan', nickname: 'gaeron', rating: 1.4, winrate: 1.2 },
    { id: 8, pic, name: 'Оля', nickname: 'olly3', rating: 1.4, winrate: 1.2 },
    { id: 9, pic, name: 'Илон Маск', nickname: 'teslanator', rating: 1.4, winrate: 1.2 },
    { id: 10, pic, name: 'Банан', nickname: 'banyourself', rating: 1.4, winrate: 1.2 },
    { id: 11, pic, name: 'Андрей9', nickname: 'infodusha', rating: 1.4, winrate: 1.2 },
    { id: 12, pic, name: 'Андрей10', nickname: 'infodusha', rating: 1.4, winrate: 1.2 },
    { id: 13, pic, name: 'Андрей11', nickname: 'infodusha', rating: 1.4, winrate: 1.2 },
];

function Test() {

    let [selected, setSelected] = useState([]);

    function handleSelect(key) {
        setSelected((prevSelected) => {
            let selected = prevSelected.slice();
            if(selected.includes(key))
                selected.splice(selected.indexOf(key), 1);
            else
                selected.push(key);
            return selected;
        });
    }

    return (
        <Page title="FPP">
            <Header />
            <Roundlist users={users} selected={3} />
            <Filters selected={selected} onSelect={handleSelect} />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </Page>
    );

}

export default Test;
