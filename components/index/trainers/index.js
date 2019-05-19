import css from './style.css';
import Roundlist from 'ui/roundlist';
import pic from '../../../avatar.png';
import Filters from 'components/filters';

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

function Trainers() {
    return (
        <div className={css.trainers}>
            <div className={css.header}>
                <span className={css.text}>Выбери своего тренера</span>
                <Filters selected={['expert']} onSelect={() => {}} />
            </div>
            <Roundlist users={users} selected={3} />
        </div>
    );
}

export default React.memo(Trainers);
