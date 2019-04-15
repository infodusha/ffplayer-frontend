import css from './style.css';

function Title() {
    return (
        <div className={css.title}>
            <div className={css.burger}>
                <i className={css.burgerIcon}></i>
            </div>
        </div>
    );
}

export default React.memo(Title);
