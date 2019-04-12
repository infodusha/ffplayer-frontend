import { useState, useEffect } from 'react';

export function useWindowWidth() {

    let [width, setWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);

    useEffect(() => {
        function handleResize() {
            setWidth((w) => {
                let nextW = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                return nextW !== w ? nextW : w;
            });
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;

}
