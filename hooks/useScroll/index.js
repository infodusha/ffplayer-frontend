import { useState, useEffect } from 'react';
import cn from 'classnames';
import css from './style.css';

export function useScroll(ref) {

    let [className, setClassName] = useState(cn(css.scroll, css.touch, css.hidden));

    useEffect(() => {
        let item = ref.current;
        let planer = null;

        function show() {
            setClassName(cn(css.scroll, css.touch));
        }

        function hide() {
            setClassName(cn(css.scroll, css.touch, css.hidden));
        }

        function plan() {
            planer = window.setTimeout(hide, 2000);
        }

        function unplan() {
            if(planer !== null) {
                window.clearTimeout(planer);
                planer = null;
            }
        }

        function handleStart() {
            unplan();
            show();
        }

        function handleMove() {
            unplan();
            show();
            plan();
        }

        function handleEnd() {
            plan();
        }

        item.addEventListener('touchstart', handleStart);
        item.addEventListener('touchmove', handleMove);
        item.addEventListener('touchend', handleEnd);
        item.addEventListener('touchcancel', handleEnd);

        return () => {
            item.removeEventListener('touchstart', handleStart);
            item.removeEventListener('touchmove', handleMove);
            item.removeEventListener('touchend', handleEnd);
            item.removeEventListener('touchcancel', handleEnd);
        };
    });

    return className;
}
