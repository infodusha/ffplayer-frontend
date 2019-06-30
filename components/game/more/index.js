import css from './style.css';
import Skills from './skills';

function More() {
    return (
        <div className={css.more}>
            <div className={css.skills}>
                <div className={css.title}>Прокачивай<br />навыки с тренером</div>
                <div className={css.skillsList}>
                    <Skills />
                </div>
                {/* <div className={css.subskills}>Настройка управления, Оборудка, Стрельба, Пробитие, Танкование, Разъезды на картах, Победные танки, Стратегия</div> */}
            </div>
            <div className={css.game}>
                <div className={css.logo}></div>
                <p className={css.text}>
                    World of Tanks Blitz — мобильный free-to-play MMO-экшен, посвященный танковым сражениям середины ХХ века и предлагающий абсолютно новый формат командных онлайн-баталий.
                </p>
                <p className={css.text}>
                    Игра унаследовала все лучшее, что сделало оригинальную версию World of Tanks любимой игрой миллионов.
                    Игроков ждет впечатляющий арсенал легендарных стальных машин, разделенных на несколько классов: средние танки,
                    тяжелые танки и противотанковые самоходные установки. Каждый класс обладает уникальными игровыми характеристиками
                    и отличается своим индивидуальным стилем ведения боя.
                </p>
                <a className={css.download} href="https://wotblitz.ru" target="_blank" rel="noopener noreferrer">
                    Скачать на официальном сайте
                </a>
            </div>
        </div>
    );
}

export default More;
