import { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import { HEXtoRGBA } from 'lib/utils';
import { useHovered } from 'hooks/useHovered';

function getAplha(selected, hovered) {
    if(selected)
        return 1;
    if(hovered)
        return 0.2;
    return 0.1;
}

function ButtonFilter({ caption, icon: Icon, color, selected, onClick }) {

    let ref = useRef();
    let hovered = useHovered(ref);

    let filterStyle = {
        backgroundColor: HEXtoRGBA(color, getAplha(selected, hovered)),
    };

    let isSelected = selected && !hovered;

    let filterClassName = cn(css.button, {
        [css.selected]: isSelected,
        [css.unselected]: !isSelected,
    });
    return (
        <button className={filterClassName} style={filterStyle} tabIndex={0} onClick={onClick} ref={ref}>
            <Icon color={selected ? 'white' : color} />
            <span className={css.caption}>{caption}</span>
        </button>
    );
}

function colorType(props, propName, componentName) {
    if(!(/^#[0-9a-fA-F]{6}$/i).test(props[propName]))
        return new Error(`Invalid prop '${propName}' supplied to '${componentName}': the prop is not a valid color`);
}

ButtonFilter.propTypes = {
    caption: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: colorType,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default React.memo(ButtonFilter);
