import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';

function HEXtoRGBA(color, alpha = 1) {
    let red = parseInt(color.slice(1, 3), 16);
    let green = parseInt(color.slice(3, 5), 16);
    let blue = parseInt(color.slice(5, 7), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function ButtonFilter({ caption, icon: Icon, color, selected, onClick }) {
    let filterStyle = {
        backgroundColor: HEXtoRGBA(color, selected ? 1 : 0.2),
    };
    let filterClassName = cn(css.filter, {
        [css.selected]: selected,
        [css.unselected]: !selected,
    });
    return (
        <button className={filterClassName} style={filterStyle} tabIndex="0" onClick={onClick}>
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