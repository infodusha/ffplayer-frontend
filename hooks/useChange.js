import { useEffect, useRef } from 'react';

const noop = () => {};

export function useChange(fn, deps) {

    let renderd = useRef(false);

    useEffect(() => {
        let isRendered = renderd.current;
        return isRendered ? fn() : noop;
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        renderd.current = true;
        return () => {
            renderd.current = false;
        };
    }, []);

}
