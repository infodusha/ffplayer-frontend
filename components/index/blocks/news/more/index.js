import React from 'react';
import css from './style.css';

function MoreNews() {
    return (
        <button className={css.button}>Все новости</button>
    );
}

export default React.memo(MoreNews);
