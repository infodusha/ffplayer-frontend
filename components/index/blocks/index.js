import css from './style.css';
import Block from './block';
import marketImage from './market.png';

function Blocks() {
    return (
        <div className={css.blocks}>
            <Block caption="Маркет" isBig color="#FFFFFF">
                <div className={css.market}>
                    <div className={css.marketTip}>Маркет</div>
                    <div className={css.marketTip}>полезностей</div>
                    <img className={css.marketImg} src={marketImage} />
                </div>
            </Block>
            <Block caption="Новости" color="#1686FB">
                Новости
            </Block>
            <Block caption="Он-лайн" color="#ED5158">
                Новости
            </Block>
        </div>
    );
}

export default React.memo(Blocks);
