import css from './style.css';

function Title() {
    return (
        <div className={css.title}>
            <div className={css.label}></div>
            <div className={css.burger}>
                <div className={css.burgerIcon} />
            </div>
        </div>
    );
}

export default React.memo(Title);
