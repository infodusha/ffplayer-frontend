import { useEffect } from 'react';

export function useWheelScroll(ref, length, setScroll, speed) {

    useEffect(() => {

        let item = ref.current;

        if(!item)
            return;

        function wheel({ deltaY }) {
            if(event.shiftKey && deltaY !== 0) {
                let v = deltaY > 0 ? speed : -speed;
                setScroll((s) => Math.max(0, Math.min(s + v, length)));
            }
        }

        item.addEventListener('mousewheel', wheel);

        return () => item.removeEventListener('mousewheel', wheel);

    }, [length, ref, setScroll, speed]);

}
