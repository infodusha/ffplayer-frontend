import cn from 'classnames';
import css from './style.css';
import { useMaxScroll } from 'hooks/useMaxScroll';

function Content({ children, className, ...userProps }) {

    let isScrolled = useMaxScroll(70);

    return (
        <div className={cn(css.content, className, { [css.scrolled]: isScrolled })} {...userProps}>
            {children}
        </div>
    );
}

export default Content;
