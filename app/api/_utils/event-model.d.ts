interface Params<T extends string> {
    params: {
        [key in T]: string;
    };
}
