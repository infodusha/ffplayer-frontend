import css from './style.css';
import cn from 'classnames';

function Skills() {
    return (
        <div className={css.sizer}>
            <div className={css.skills}>
                <div className={cn(css.skill, css.skill1)}>
                    <div className={css.caption}>Выцеливание <br />и танкование</div>
                    <div className={css.rightDivider}></div>
                </div>
                <div className={cn(css.skill, css.skill2)}>
                    <div className={css.caption}>Ставь правильное <br />оборудование</div>
                </div>
                <div className={cn(css.skill, css.skill3)}>
                    <div className={css.caption}>Перестреливайся <br />и побеждай</div>
                </div>
                <div className={cn(css.skill, css.skill4)}>
                    <div className={css.caption}>Угадывай <br />направление атаки</div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
