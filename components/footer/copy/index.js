import css from './style.css';
import Link from 'next/link';

function Copy() {
    return (
        <div className={css.copy}>
            <div>
                <Link href="#">
                    <a>Политика конфиденциальности</a>
                </Link>
            </div>
            <div className={css.copyrights}>
                <div>
                    2019 © ffplayer.pro
                </div>
                <div className={css.copyright}>
                    2019 © wargaming.net
                </div>
            </div>
        </div>
    );
}

export default React.memo(Copy);
