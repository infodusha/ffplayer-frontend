import { useEffect } from 'react';

export function useSwipeScroll({ hasTouch, ref, length, setScroll }) {

    useEffect(() => {

        if(!hasTouch)
            return () => {};

        let item = ref.current;
        let dtX;
        let startX;

        function start({ touches }) {
            if(touches.length !== 1)
                return;
            dtX = 0;
            startX = touches[0].pageX;
        }

        function move({ touches }) {
            if(touches.length !== 1)
                return;
            let dtScroll = startX - touches[0].pageX;
            setScroll((s) => Math.max(0, Math.min(s - dtX + dtScroll, length)));
            dtX = dtScroll;
        }

        item.addEventListener('touchstart', start);
        item.addEventListener('touchmove', move);

        return () => {
            item.removeEventListener('touchstart', start);
            item.removeEventListener('touchmove', move);
        };

    }, [hasTouch, length, ref, setScroll]);

}
