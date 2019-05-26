import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './style.css';
import { useSize } from 'react-hook-size';

const offset = Number(css.offset.replace('px', ''));

function Scroll({ length, value, onChange }) {

    let ref = useRef();
    let { width } = useSize(ref);
    let step = length / width;

    useEffect(() => {
        if(!ref.current)
            return;
        let postion = value / step;
        if(postion > width)
            onChange(length);
        else if(postion < 0)
            onChange(0);
    }, [length, onChange, step, value, width]);

    function handleDrag(event) {
        event.preventDefault();
    }

    function handleMove({ pageX }) {
        let postion = pageX - ref.current.offsetLeft;
        if(postion > width)
            onChange(length);
        else if(postion < 0)
            onChange(0);
        else
            onChange(postion * step);
    }

    function handleUp() {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
    }

    function handleDown() {
        document.addEventListener('mouseup', handleUp);
        document.addEventListener('mousemove', handleMove);
    }

    let isVsible = width !== null && length !== null && !isNaN(step) && step !== 0;

    let style = {
        left: !isVsible ? offset : Math.min(value / step + offset, width + offset),
    };

    return (
        <div className={css.scroll} ref={ref} onClick={handleMove}>
            <div className={css.line}>
                <div
                    style={style}
                    className={css.trigger}
                    onDragStart={handleDrag}
                    onMouseDown={handleDown}
                ></div>
            </div>
        </div>
    );
}

Scroll.propTypes = {
    length: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default React.memo(Scroll);
