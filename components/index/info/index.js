import css from './style.css';
import Tips from 'components/tips';

function Info() {
    return (
        <div className={css.info}>
            <Tips color="rgba(255, 255, 255, 0.2)" />
        </div>
    );
}

export default React.memo(Info);
