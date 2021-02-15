enum symbols {
    '+',
    '-',
    '/',
    '*',
    '%'
}

type Callback = {
    (err: Error, result?: undefined): Error,
    (err: null, result: number): number
};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: any): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}

function superComputer(nb1: number, sym: symbols, nb2: number, callback: Callback){
    let result;
    let err;
    switch (sym) {
        case symbols["%"]: try {result = nb1 % nb2} catch(e) {err = e}
            break;
        case symbols["+"]: try {result = nb1 + nb2} catch(e) {err = e}
            break;
        case symbols["-"]: try {result = nb1 - nb2} catch(e) {err = e}
            break;
        case symbols["*"]: try {result = nb1 * nb2} catch(e) {err = e}
            break;
        case symbols["/"]: try {result = nb1 / nb2} catch(e) {err = e}
            break;
        default: return "Wrong operator"
    }
    return callback(err, result)
}

superComputer(100, symbols["/"], 0, callback)