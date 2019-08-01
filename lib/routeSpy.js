import Router from 'next/router';
import { useEffect } from 'react';

let started = false;

let history = [];

function handleRouteChange(url) {
    history.push(url);
}

function startSpy() {
    if(!started) {
        started = true;
        history.push(window.location.pathname);
        Router.events.on('routeChangeStart', handleRouteChange);
    }
}

function stopSpy() {
    if(started) {
        started = false;
        Router.events.off('routeChangeStart', handleRouteChange);
    }
}

export function getHisory() {
    return history;
}

export function getPrevious() {
    return history[history.length - 2];
}

export default function RouteSpy() {
    useEffect(() => {
        startSpy();
        return () => stopSpy();
    }, []);
    return null;
}
