import cn from 'classnames';
import css from './style.css';
import Copy from './copy';
import Nav from 'components/nav';
import Pages from './pages';
import Button from 'ui/buttons/primary';

const pages1 = [
    { key: 'news', caption: 'Новости', href: '#' },
    { key: 'trainer/become', caption: 'Стать Тренером', href: '#' },
    { key: 'trainer/find', caption: 'Найти Тренера', href: '#' },
    { key: 'streams', caption: 'Он-лайн стримы', href: '#' },
];

const pages2 = [
    { key: 'error', caption: 'Сообщить об ошибке', href: '#' },
    { key: 'improvement', caption: 'Что можно улучшить?', href: '#' },
];

function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.top}>
                <div className={css.logo}>
                    FFP
                </div>
                <div className={css.nav}>
                    <Nav />
                </div>
                <div className={cn(css.pages, css.pagesFirst)}>
                    <Pages items={pages1} />
                </div>
                <div className={css.pages}>
                    <Pages items={pages2} />
                </div>
                <div className={css.train}>
                    <Button className={css.startTrain} caption="Начать тренировку" />
                </div>
            </div>
            <Copy />
        </div>
    );
}

export default React.memo(Footer);
