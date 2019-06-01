import { useState, useEffect } from 'react';

export function useMaxScroll(maxScroll = 0) {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled((window.pageYOffset || window.document.documentElement.scrollTop) > maxScroll);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [maxScroll]);

    return isScrolled;
}
