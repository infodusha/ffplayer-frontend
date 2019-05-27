import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './style.css';
import { HEXtoRGBA } from 'lib/utils';

function ButtonFilter({ caption, icon: Icon, color, selected, onClick }) {
    let filterStyle = {
        backgroundColor: HEXtoRGBA(color, selected ? 1 : 0.2),
    };
    let filterClassName = cn(css.button, {
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
