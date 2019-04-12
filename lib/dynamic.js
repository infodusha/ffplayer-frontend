import nextDynamic from 'next/dynamic';

const empty = () => null;

export function dynamic(importMethod, loading = empty) {
    return nextDynamic(importMethod, { ssr: false, loading });
}
