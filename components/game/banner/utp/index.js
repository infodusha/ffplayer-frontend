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
            <div className={css.actions}>
                <ButtonFilled caption="Быстрая тренировка" className={css.button} />
                <Button caption="Забронировать" className={css.button} />
            </div>
        </div>
    );
}


export default Utp;
