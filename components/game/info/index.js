import cn from 'classnames';
import css from './style.css';

function Info() {
    return (
        <div className={css.info}>
            <div className={css.block}>
                <div className={css.image} />
                <div className={css.text}>
                    World of Tanks Blitz — мобильный free-to-play MMO-экшен, посвященный танковым сражениям середины ХХ века и предлагающий абсолютно новый формат командных онлайн-баталий.
                </div>
                <a className={css.download} href="https://wotblitz.ru" target="_blank" rel="noopener noreferrer">
                    Скачать на официальном сайте
                </a>
            </div>
            <div className={cn(css.bottom, css.bottom1)}></div>
            <div className={cn(css.bottom, css.bottom2)}></div>
        </div>
    );
}

export default Info;
