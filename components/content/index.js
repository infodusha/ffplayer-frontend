import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.css';

function Content({ children, className, ...userProps }) {
    return (
        <div className={cn(css.content, className)} {...userProps}>
            {children}
        </div>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Content;
