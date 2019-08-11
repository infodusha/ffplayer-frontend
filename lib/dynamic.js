import nextDynamic from 'next/dynamic';

export function dynamic(importMethod, loading) {
    let options = { ssr: false };
    if(loading)
        options.loading = loading;
    return nextDynamic(importMethod, options);
}
