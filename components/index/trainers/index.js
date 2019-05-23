import { useState, useMemo } from 'react';
import css from './style.css';
import Roundlist from 'ui/roundlist';
import pic from '../../../avatar.png';
import Filters from 'components/filters';

const allUsers = [
    { id: 1, pic, name: 'Андрей', nickname: 'infodusha', rating: 1.1, filters: ['top'] },
    { id: 2, pic, name: 'Егор', nickname: 'krid_bro', rating: 3.4, filters: ['expert'] },
    { id: 3, pic, name: 'Олег', nickname: 'olegik', rating: 3.2, filters: ['expert'] },
    { id: 4, pic, name: 'Миха', nickname: 'mixxx_x', rating: 4.2, filters: ['expert'] },
    { id: 5, pic, name: 'Димас', nickname: 'dimdim94', rating: 6.1, filters: ['expert'] },
    { id: 6, pic, name: 'Алексей', nickname: 'perfect_m1nd', rating: 9.9, filters: ['top', 'streamer'] },
    { id: 7, pic, name: 'Dan', nickname: 'gaeron', rating: 1.4, filters: ['expert'] },
    { id: 8, pic, name: 'Оля', nickname: 'olly3', rating: 1.4, filters: ['expert'] },
    { id: 9, pic, name: 'Илон Маск', nickname: 'teslanator', rating: 7.4, filters: ['expert'] },
    { id: 10, pic, name: 'Банан', nickname: 'banyourself', rating: 1.4, filters: ['master'] },
    { id: 11, pic, name: 'Андрей9', nickname: 'infodusha', rating: 1.4, filters: ['expert'] },
    { id: 12, pic, name: 'Андрей10', nickname: 'infodusha', rating: 1.4, filters: ['expert'] },
    { id: 13, pic, name: 'Андрей11', nickname: 'infodusha', rating: 1.4, filters: ['expert'] },
];

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
        let index = filters.findIndex((f) => f === 'streamer');
        let streamer = index !== -1;
        let filter = [...filters];
        if(streamer)
            filter.splice(index, 1);
        return allUsers.filter((user) => {
            if(streamer && !user.filters.includes('streamer'))
                return false;
            if(filter.length === 0)
                return true;
            if(!user.filters.find((f) => filter.includes(f)))
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
            <Roundlist users={users} selected={3} />
        </div>
    );
}

export default React.memo(Trainers);
