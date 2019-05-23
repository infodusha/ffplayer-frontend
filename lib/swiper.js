export class Swiper {

    _length;

    _item;

    _dtX;

    _startX;

    _listener;

    constructor(item, length) {
        if(!item)
            throw new Error('Swiper item is undefined');
        this._item = item;
        if(!length)
            throw new Error('Swiper length is undefined');
        this._length = length;
    }


    _start = ({ touches }) => {
        if(touches.length !== 1)
            return;
        this._dtX = 0;
        this._startX = touches[0].pageX;
    }

    _move = ({ touches }) => {
        if(touches.length !== 1)
            return;
        let dtScroll = this._startX - touches[0].pageX;
        this._listener((scroll) => Math.max(0, Math.min(scroll - this._dtX + dtScroll, this._length)));
        this._dtX = dtScroll;
    }

    addListener(listener) {

        if(this._listener)
            throw new Error('Swiper: listener is defined');
        this._listener = listener;
        this._item.addEventListener('touchstart', this._start);
        this._item.addEventListener('touchmove', this._move);
    }


    removeListener() {
        if(!this._listener)
            throw new Error('Swiper: listener is undefined');
        delete this._listener;
        this._item.removeEventListener('touchstart', this._start);
        this._item.removeEventListener('touchmove', this._move);
    }


}
