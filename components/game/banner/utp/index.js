import Button from 'ui/buttons/primary';
import ButtonFilled from 'ui/buttons/filled';
import css from './style.css';

function Utp() {
    return (
        <div className={css.utp}>
            <div className={css.text}>
                Обучайся и Прокачивай скил
                <br />
                в World of Tanks Blitz
            </div>
            <div className={css.mText}>
                Обучайся и Прокачивай скил в
            </div>
            <div className={css.mGame}>
                WORLD<br />OF TANKS<br />BLITZ
            </div>
            <div className={css.actions}>
                <ButtonFilled caption="Начать тренировку" className={css.button1} />
                <Button caption="Забронировать" className={css.button2} />
            </div>
        </div>
    );
}


export default Utp;
