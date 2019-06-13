import React from 'react';
import ArrowIcon from './arrow';
import colors from 'ui/colors.css';
import css from './style.css';
import PropTypes from 'prop-types';

function Caption({ caption, hovered }) {
    return (
        <React.Fragment>
            {caption}
            <div className={css.arrow}>
                <ArrowIcon color={hovered ? colors.primarySelect : colors.gameText} />
            </div>
        </React.Fragment>
    );
}

Caption.propTypes = {
    hovered: PropTypes.bool.isRequired,
    caption: PropTypes.string.isRequired,
};

export default Caption;
