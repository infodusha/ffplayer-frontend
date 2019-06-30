import Router from 'next/router';
import { useLayoutEffect } from 'react';

let started = false;

let history = [];

function handleRouteChange(url) {
    history.push(url);
}

function startSpy() {
    if(!started) {
        started = true;
        history.push(window.location.pathname);
        history = history.slice(-10);
        Router.events.on('routeChangeStart', handleRouteChange);
    }
}

function stopSpy() {
    if(started)
        Router.events.off('routeChangeStart', handleRouteChange);
}

export function getHisory() {
    return history;
}

export function getPrevious() {
    return history[history.length - 2];
}

export default function RouteSpy() {
    useLayoutEffect(() => {
        startSpy();
        return () => stopSpy();
    }, []);
    return null;
}