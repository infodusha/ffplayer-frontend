import { useState, useEffect } from 'react';

export function useMaxScroll(maxScroll = 0) {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let item = window.document.querySelector('body > div > div');

        function handleScroll() {
            setIsScrolled(item.scrollTop > maxScroll);
        }

        item.addEventListener('scroll', handleScroll);
        return () => item.removeEventListener('scroll', handleScroll);
    }, [maxScroll]);

    return isScrolled;
}
