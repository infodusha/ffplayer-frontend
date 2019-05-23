import css from './style.css';
import Games from './games';

function Welcome() {
    return (
        <div className={css.welcome}>
            <div className={css.text}>
                <span className={css.line}>Feel like the First Player - Учим побеждать в онлайн играх</span>
                <span className={css.subline}>Тренируйтесь, общайтесь, смотрите трансляции!</span>
            </div>
            <div className={css.select}>
                Выбери игру для <span className={css.train}>Тренировки</span>
            </div>
            <Games />
        </div>
    );
}

export default React.memo(Welcome);
