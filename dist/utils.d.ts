export declare const toDictUsingUniqueKey: <T>(ar: T[], key: (_: T) => string) => {
    [x: string]: T;
};
export declare function isNotEmpty<TValue>(value: TValue | undefined | null): value is TValue;
export declare const compactMap: <T, U>(ar: T[], f: (_: T) => U | undefined) => U[];
