import Router from 'next/router';
import { useEffect } from 'react';

let started = false;

// TODO
//let history = [window.location.pathname];

function handleRouteChange(url) {
    history.push(url);
}

export function startSpy() {
    if(!started)
        Router.events.on('routeChangeStart', handleRouteChange);
}

export function stopSpy() {
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
    useEffect(() => {
        startSpy();
        return () => stopSpy();
    }, []);
    return null;
}
