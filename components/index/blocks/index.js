import css from './style.css';
import Block from './block';
import MoreNews from './news/more';
import NewsItem from './news/item';

const news = [
    { id: 1, date: new Date(), caption: 'Смым передовым сервисом в игровой индустрии на 2020 год, по версии Forbs становится FFPlayer' },
    { id: 2, date: new Date(0), caption: 'Начало новго формата и подхода к миру игровых платформ' },
];

function Blocks() {
    return (
        <div className={css.blocks}>
            <Block caption="Маркет" isBig color="#FFFFFF">
                <div className={css.market}>
                    <div className={css.marketTip}>Маркет</div>
                    <div className={css.marketTip}>полезностей</div>
                </div>
            </Block>
            <Block caption="Новости" color="#1686FB">
                <div className={css.iconNews}>
                    <div className={css.centerIcon}>
                        <div className={css.newsImg} />
                    </div>
                    <div className={css.topReverser}></div>
                </div>
                <div className={css.news}>
                    <NewsItem date={news[0].date}>{news[0].caption}</NewsItem>
                    <NewsItem date={news[1].date}>{news[1].caption}</NewsItem>
                    <MoreNews />
                </div>
            </Block>
            <div className={css.last}>
                <Block caption="Он-лайн" color="#ED5158" list="top">
                    <div className={css.centerIcon}>
                        <div className={css.onlineImg} />
                    </div>
                    <div className={css.topReverser}></div>
                </Block>
                <Block caption="Live Chat" color="#A05AF8" list="bottom">
                    <div className={css.chat}>
                    </div>
                </Block>
            </div>
        </div>
    );
}

export default React.memo(Blocks);
