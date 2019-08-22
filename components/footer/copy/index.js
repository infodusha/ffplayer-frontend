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
                    <Link href="https://ffplayer.pro">
                        <a>2019 © ffplayer.pro</a>
                    </Link>
                </div>
                <div className={css.copyright2}>
                    <Link href="https://wargaming.net">
                        <a>2019 © wargaming.net</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Copy);
