import nextDynamic from 'next/dynamic';

export function dynamic(importMethod, loading) {
    return nextDynamic(importMethod, { ssr: false, loading });
}
