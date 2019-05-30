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
            let sign = Math.sign(v0);
            let a = v0 / length * 2;
            let v = (t) => v0 - a*t;
            let time = Date.now();
            let prevTime = 0;
            interval = window.setInterval(() => {
                let t = Date.now() - time;
                if(sign !== Math.sign(v(t))) {
                    window.clearInterval(interval);
                    interval = null;
                    return;
                }
                let dt = t - prevTime;
                setScroll((scroll) => Math.max(0, Math.min(scroll + v(t) * dt, length)));
                prevTime = t;
            }, 10);
        }

        function start(event) {
            if(event.touches.length !== 1)
                return;
            if(event.cancelable)
                event.preventDefault();
            if(interval) {
                window.clearInterval(interval);
                interval = null;
            }
            dtX = 0;
            startX = event.touches[0].pageX;
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
