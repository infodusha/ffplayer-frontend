import { useState, useEffect } from 'react';

let globalHasTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

export function useHasTouch() {

    let [hasTouch, setHasTouch] = useState(globalHasTouch);

    useEffect(() => {

        let noMove = false;

        function touch() {
            noMove = true;
            window.setTimeout(() => {
                window.setTimeout(() => {
                    noMove = false;
                }, 0);
            }, 0);
            if(hasTouch)
                return;
            setHasTouch(true);
            globalHasTouch = true;
        }

        function move() {
            if(noMove || !hasTouch)
                return;
            setHasTouch(false);
            globalHasTouch = false;
        }

        window.addEventListener('touchstart', touch);
        hasTouch && window.addEventListener('mousemove', move);

        return () => {
            window.removeEventListener('touchstart', touch);
            hasTouch && window.removeEventListener('mousemove', move);
        };
    }, [hasTouch]);

    return hasTouch;

}
