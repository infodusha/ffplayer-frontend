import css from './style.css';
import Tips from 'components/tips';

function Info() {
    return (
        <div className={css.info}>
            <Tips noHover />
        </div>
    );
}

export default Info;
