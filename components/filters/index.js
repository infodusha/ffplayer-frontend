import PropTypes from 'prop-types';
import ButtonFilter from 'ui/buttons/filter';
import css from './style.css';
import TopIcon from './icons/top';
import ExpertIcon from './icons/expert';
import MasterIcon from './icons/master';
import StreamerIcon from './icons/streamer';
import colors from 'ui/colors.css';

const items = [
    { key: 'top', caption: 'Топ', color: colors.filterTop, icon: TopIcon },
    { key: 'expert', caption: 'Эксперт', color: colors.filterExpert, icon: ExpertIcon },
    { key: 'master', caption: 'Мастер', color: colors.filterMaster, icon: MasterIcon },
    { key: 'streamer', caption: 'Стример', color: colors.filterStreamer, icon: StreamerIcon },
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
