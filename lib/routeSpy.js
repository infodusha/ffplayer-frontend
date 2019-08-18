import { useEffect } from 'react';
import Router from 'next/router';

let started = false;

let history = [];

function handleRouteChange(url) {
    history.push(url);
}

export function getHisory() {
    return history;
}

export function getPrevious() {
    return history[history.length - 2];
}

export function useRouteSpy() {
    useEffect(() => {
        if(!started) {
            started = true;
            history.push(window.location.pathname);
            Router.events.on('routeChangeComplete', handleRouteChange);
            return () => {
                started = false;
                Router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, []);
}
