import ReactDOM from 'react-dom';

function Modal({ open = false, children }) {
    if(!open)
        return null;
    return ReactDOM.createPortal(children, window.document.body);
}

export default Modal;
