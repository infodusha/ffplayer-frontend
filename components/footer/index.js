import css from './style.css';
import Copy from './copy';
import Nav from 'components/nav';
import Pages from './pages';

function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.top}>
                <div className={css.logo}>
                    FFP
                </div>
                <div className={css.nav}>
                    <Nav />
                </div>
                <div className={css.pages}>
                    <Pages />
                </div>
            </div>
            <Copy />
        </div>
    );
}

export default React.memo(Footer);
