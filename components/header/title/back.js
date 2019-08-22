import Link from 'next/link';
import { getPrevious } from 'lib/routeSpy';
import ArrowIcon from './arrow';
import css from './style.css';

function Back() {

    let url = getPrevious() || '/ind';

    return (
        <Link href={url}>
            <div className={css.back}>
                <ArrowIcon />
            </div>
        </Link>
    );
}

export default Back;
