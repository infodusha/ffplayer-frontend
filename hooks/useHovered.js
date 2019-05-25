import { useState, useEffect } from 'react';

export function useHovered(ref) {

    let [hovered, setHovered] = useState(false);

    useEffect(() => {

        let item = ref.current;

        if(!item)
            return;

        function hover() {
            setHovered(true);
        }

        function unhover() {
            setHovered(false);
        }

        item.addEventListener('mouseenter', hover);
        item.addEventListener('mouseleave', unhover);

        return () => {
            item.removeEventListener('mouseenter', hover);
            item.addEventListener('mouseleave', unhover);
        };
    }, [ref]);

    return hovered;

}
