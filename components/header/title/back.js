import Router from 'next/router';
import { getPrevious } from 'lib/routeSpy';
import ArrowIcon from './arrow';
import css from './style.css';

function Back() {

    function goBack() {
        let url = getPrevious() || '/';
        Router.push(url);
    }

    return (
        <div className={css.back} onClick={goBack}>
            <ArrowIcon />
        </div>
    );
}

export default Back;
