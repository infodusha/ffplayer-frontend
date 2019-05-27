import { useEffect } from 'react';

export function useSwipeArea(ref, length, setScroll) {

    useEffect(() => {
        if(!length)
            return;
        let item = ref.current;

        let startX;
        let dtX;
        let startT;
        let interval;

        function inertia(v0) {
            let s = 10;
            let a = v0 / 1000;
            let v = (t) => v0 + a*t;
            let time = Date.now();
            interval = window.setInterval(() => {
                let t = Date.now() - time;
                if(t >= Math.abs(v0) * 100) {
                    window.clearInterval(interval);
                    interval = null;
                    return;
                }
                setScroll((scroll) => Math.max(0, Math.min(scroll + s * v(t), length)));
            }, 10);
        }

        function start({ touches }) {
            if(touches.length !== 1)
                return;
            if(interval) {
                window.clearInterval(interval);
                interval = null;
            }
            dtX = 0;
            startX = touches[0].pageX;
            startT = Date.now();
        }

        function move({ touches }) {
            if(touches.length !== 1)
                return;
            let dtScroll = startX - touches[0].pageX;
            setScroll((scroll) => Math.max(0, Math.min(scroll - dtX + dtScroll, length)));
            dtX = dtScroll;
        }

        function end({ touches }) {
            if(touches.length !== 0)
                return;
            let dtT = Date.now() - startT;
            let dtV = dtX / dtT;
            inertia(dtV);
        }


        item.addEventListener('touchstart', start);
        item.addEventListener('touchmove', move);
        item.addEventListener('touchend', end);
        return () => {
            item.removeEventListener('touchstart', start);
            item.removeEventListener('touchmove', move);
            item.removeEventListener('touchend', end);
        };
    }, [length, ref, setScroll]);


}
