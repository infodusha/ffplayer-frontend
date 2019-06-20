import css from './style.css';
import cn from 'classnames';
import Games from './games';
import { useMaxScroll } from 'hooks/useMaxScroll';

function Welcome() {

    let isScrolled = useMaxScroll(70);

    return (
        <div className={cn(css.welcome, { [css.scrolled]: isScrolled })}>
            <div className={css.text}>
                <span className={css.line}>FFPlay - Учим побеждать в онлайн играх</span>
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
