import { useEffect } from 'react';

export function useSwipeArea(ref, length, setScroll) {

    useEffect(() => {
        if(!length)
            return;
        let item = ref.current;

        let startX;
        let dtX;

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
            setScroll((scroll) => Math.max(0, Math.min(scroll - dtX + dtScroll, length)));
            dtX = dtScroll;
        }


        item.addEventListener('touchstart', start);
        item.addEventListener('touchmove', move);
        return () => {
            item.removeEventListener('touchstart', start);
            item.removeEventListener('touchmove', move);
        };
    }, [length, ref, setScroll]);


}
