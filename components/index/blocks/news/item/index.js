import React from 'react';
import css from './style.css';
import PropTypes from 'prop-types';

const mlist = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function NewsItem({ date, children }) {
    let day = date.getDate();
    let month = mlist[date.getMonth()];
    let year = date.getFullYear();
    return (
        <div className={css.item}>
            <div className={css.date}>{`${day} ${month} ${year}`}</div>
            <div className={css.content}>{children + ' →'}</div>
        </div>
    );
}

NewsItem.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    children: PropTypes.string.isRequired,
};

export default React.memo(NewsItem);
