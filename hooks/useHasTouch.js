import { useState, useEffect } from 'react';

let globalHasTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

export function useHasTouch() {

    let [hasTouch, setHasTouch] = useState(globalHasTouch);

    useEffect(() => {

        let prevScreenX;
        let prevScreenY;

        function touch() {
            prevScreenX = undefined;
            prevScreenY = undefined;
            setHasTouch(true);
            globalHasTouch = true;
        }

        function move({ screenX, screenY }) {
            const movementX = prevScreenX ? screenX - prevScreenX: 0;
            const movementY = prevScreenY ? screenY - prevScreenY: 0;
            prevScreenX = screenX;
            prevScreenY = screenY;
            if(movementX === 0 && movementY === 0)
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
