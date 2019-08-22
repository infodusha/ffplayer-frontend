import { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ open = false, children }) {

    useLayoutEffect(() => {
        if(open) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [open]);

    if(!open)
        return null;
    return ReactDOM.createPortal(children, window.document.body);
}

export default Modal;
