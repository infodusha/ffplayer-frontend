import PropTypes from 'prop-types';
import ButtonFilter from 'ui/button/filter';
import css from './style.css';
import TopIcon from './icons/top';
import ExpertIcon from './icons/expert';
import MasterIcon from './icons/master';
import StreamerIcon from './icons/streamer';

const items = [
    { key: 'top', caption: 'Топ', color: '#EFAD2B', icon: TopIcon },
    { key: 'expert', caption: 'Эксперт', color: '#A96EFF', icon: ExpertIcon },
    { key: 'master', caption: 'Мастер', color: '#51ADFA', icon: MasterIcon },
    { key: 'streamer', caption: 'Стример', color: '#FF4D4F', icon: StreamerIcon },
];

function Filters({ selected, onSelect: handleSelect }) {
    return (
        <div className={css.filters}>
            {items.map((item) => (
                <ButtonFilter
                    key={item.key}
                    color={item.color}
                    icon={item.icon}
                    caption={item.caption}
                    selected={selected.includes(item.key)}
                    onClick={handleSelect.bind(null, item.key)}
                />
            ))}
        </div>
    );
}

Filters.propTypes = {
    selected: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func,
};

export default React.memo(Filters);
