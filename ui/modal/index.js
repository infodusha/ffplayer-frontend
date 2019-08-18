import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function Modal({ open = false, children }) {

    let scroll = useRef(null);

    useEffect(() => {

        function lock() {
            document.body.style.position = 'fixed';
            let scrollY = scroll.current;
            document.body.style.top = `-${scrollY}px`;
            document.body.style.right = '0px';
            document.body.style.left = '0px';
        }

        function unlock() {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.right = '';
            document.body.style.left = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        if(open) {
            lock();
            return unlock;
        }
    }, [open]);

    useEffect(() => {
        function handleScroll() {
            scroll.current = window.pageYOffset || window.document.documentElement.scrollTop;
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if(scroll.current === null && open)
            throw new Error('Modal should be closed on first render');
        scroll.current = window.pageYOffset || window.document.documentElement.scrollTop;;
    }, [open]);

    if(!open)
        return null;
    return ReactDOM.createPortal(children, window.document.body);
}

export default Modal;
