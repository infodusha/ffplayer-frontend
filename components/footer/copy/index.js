import css from './style.css';
import Link from 'next/link';

function Copy() {
    return (
        <div className={css.copy}>
            <div className={css.polytics}>
                <Link href="/privacy">
                    <a>Политика конфиденциальности</a>
                </Link>
            </div>
            <div className={css.copyrights}>
                <div>
                    <a href="https://ffplayer.pro" target="_blank" rel="noopener noreferrer">2019 © ffplayer.pro</a>
                </div>
                <div className={css.copyright2}>
                    <a href="https://wargaming.net" target="_blank" rel="noopener noreferrer">2019 © wargaming.net</a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Copy);
