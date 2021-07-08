export const toDictUsingUniqueKey = function<T>(ar: T[], key: (_: T) => string): {[key in string]: T} {
    // Does not throw on duplicate keys
    const out: {[key: string]: T} = {}
    ar.forEach((x: T) => out[key(x)] = x)
    return out
}

export function isNotEmpty<TValue>(value: TValue | undefined | null): value is TValue {
    return value !== undefined && value !== null;
}

export const compactMap = function<T, U>(ar: T[], f: (_: T) => U | undefined): U[] {
    return ar
        .map(f)
        .filter(isNotEmpty)
}