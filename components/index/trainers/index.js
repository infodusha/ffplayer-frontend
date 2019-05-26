import { useState, useMemo } from 'react';
import css from './style.css';
import Roundlist from 'ui/roundlist';
import pic from '../../../avatar.png';
import Filters from 'components/filters';

const allUsers = [
    { id: 1, pic, name: 'Андрей', nickname: 'infodusha', rating: 1.1, rank: 'top' },
    { id: 2, pic, name: 'Егор', nickname: 'krid_bro', rating: 3.4, rank: 'expert' },
    { id: 3, pic, name: 'Олег', nickname: 'olegik', rating: 3.2, rank: 'expert' },
    { id: 4, pic, name: 'Миха', nickname: 'mixxx_x', rating: 4.2, rank: 'expert' },
    { id: 5, pic, name: 'Димас', nickname: 'dimdim94', rating: 6.1, rank: 'expert' },
    { id: 6, pic, name: 'Алексей', nickname: 'perfect_m1nd', rating: 9.9, rank: 'top', streamer: true },
    { id: 7, pic, name: 'Dan', nickname: 'gaeron', rating: 1.4, rank: 'expert' },
    { id: 8, pic, name: 'Оля', nickname: 'olly3', rating: 1.4, rank: 'expert' },
    { id: 9, pic, name: 'Илон Маск', nickname: 'teslanator', rating: 7.4, rank: 'expert' },
    { id: 10, pic, name: 'Банан', nickname: 'banyourself', rating: 1.4, rank: 'master' },
    { id: 11, pic, name: 'Андрей9', nickname: 'infodusha', rating: 1.4, rank: 'top' },
    { id: 12, pic, name: 'Андрей10', nickname: 'infodusha', rating: 1.4, rank: 'top' },
    { id: 13, pic, name: 'Андрей11', nickname: 'infodusha', rating: 1.4, rank: 'top' },
];

const emptyCaption = 'Пока такого тренера нет|Мы работаем над тем, чтобы он появился';

function Trainers() {

    let [filters, setFilters] = useState([]);

    function handleFilterChange(key) {
        setFilters((prevFilters) => {
            let index = prevFilters.findIndex((f) => f === key);
            if(index === -1)
                return [...prevFilters, key];
            let nextFilters = [...prevFilters];
            nextFilters.splice(index, 1);
            return nextFilters;
        });
    }

    let users = useMemo(() => {
        let streamer = filters.includes('streamer');
        let noRank = filters.length === 0 || filters.length === 1 && streamer;
        return allUsers.filter((user) => {
            if(streamer && !user.streamer)
                return false;
            if(noRank)
                return true;
            if(!filters.includes(user.rank))
                return false;
            return true;
        });
    }, [filters]);

    return (
        <div className={css.trainers}>
            <div className={css.header}>
                <span className={css.text}>Выбери своего тренера</span>
                <Filters selected={filters} onSelect={handleFilterChange} />
            </div>
            <Roundlist users={users} emptyCaption={emptyCaption} />
        </div>
    );
}

export default React.memo(Trainers);
